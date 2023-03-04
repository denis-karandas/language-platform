import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from '@schemas/user.schema';
import { UserDto } from '@modules/users/dto/user.dto';
import { IUser } from '@modules/users/interfaces/user.interfaces';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }
  async create(dto: UserDto): Promise<User> {
    const hash = await bcrypt.hash(dto.password, 10);

    return new this.userModel({
      ...dto,
      password: hash,
    }).save();
  }

  async update(id: string, dto: UserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, dto).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  getResponseModel(user: User): IUser {
    return {
      firstName: user.firstName || null,
      lastName: user.lastName || null,
      email: user.email || null,
      phone: user.phone || null,
      birthDate: user.birthDate || null,
      gender: user.gender || null,
    };
  }
}
