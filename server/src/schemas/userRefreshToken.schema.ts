import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'schemas/user.schema';

export type UserRefreshTokenDocument = UserRefreshToken & Document;

@Schema({ collection: 'userRefreshTokens' })
export class UserRefreshToken {
  _id: mongoose.Types.ObjectId;

  __v: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  user: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  token: string;
}

export const UserRefreshTokenSchema =
  SchemaFactory.createForClass(UserRefreshToken);
