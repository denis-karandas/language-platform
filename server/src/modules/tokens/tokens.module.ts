import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TokensService } from 'modules/tokens/tokens.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserRefreshToken,
  UserRefreshTokenSchema,
} from 'schemas/userRefreshToken.schema';
@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule,
    MongooseModule.forFeature([
      { name: UserRefreshToken.name, schema: UserRefreshTokenSchema },
    ]),
  ],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
