import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { UsersService } from 'modules/users/users.service';
import { TokensService } from 'modules/tokens/tokens.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokensService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies?.refreshToken || null,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_REFRESH_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    if (!payload?.id) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.findOne(payload.id);
    if (!user) {
      throw new UnauthorizedException();
    }
    const refreshToken = req.cookies.refreshToken;
    const userRefreshTokenModel = await this.tokenService.validateRefreshToken(
      refreshToken,
    );
    if (!userRefreshTokenModel) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
