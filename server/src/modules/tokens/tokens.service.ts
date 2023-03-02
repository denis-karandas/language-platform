import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { TokenDto } from 'modules/tokens/dto/token.dto';
import {
  UserRefreshToken,
  UserRefreshTokenDocument,
} from 'schemas/userRefreshToken.schema';
import { User } from 'schemas/user.schema';
import { convertDaysToMilliseconds } from 'helpers/DateAndTimeHelper';

@Injectable()
export class TokensService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @InjectModel(UserRefreshToken.name)
    private readonly userRefreshTokenModel: Model<UserRefreshTokenDocument>,
  ) {}

  static ACCESS_TOKEN_NAME = 'accessToken';
  static REFRESH_TOKEN_NAME = 'refreshToken';

  generateTokens<T extends string | object | Buffer>(payload: T): TokenDto {
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
      }),
      refreshToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
      }),
    };
  }

  async validateRefreshToken(refreshToken: string) {
    const userToken = await this.userRefreshTokenModel
      .findOne({ token: refreshToken })
      .exec();

    return userToken || null;
  }

  async saveRefreshToken(user: User, refreshToken: string) {
    const userTokens = await this.userRefreshTokenModel.aggregate([
      { $match: { user: user._id } },
    ]);

    const userToken = userTokens?.length && userTokens[0];

    if (!userToken) {
      return new this.userRefreshTokenModel({
        user,
        token: refreshToken,
      }).save();
    }
    return this.userRefreshTokenModel
      .findByIdAndUpdate(userToken._id, {
        user: new mongoose.mongo.ObjectId(user._id),
        token: refreshToken,
      })
      .exec();
  }

  async deleteRefreshToken(user: User) {
    return this.userRefreshTokenModel.deleteOne({ user: user._id }).exec();
  }

  setRefreshTokenInCookie(res: Response, token: string) {
    res.cookie(TokensService.REFRESH_TOKEN_NAME, token, {
      maxAge: convertDaysToMilliseconds(7),
      httpOnly: true,
    });
  }
}
