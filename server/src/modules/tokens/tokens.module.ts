import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { TokensService } from '@modules/tokens/tokens.service';
import {
  UserRefreshToken,
  UserRefreshTokenSchema,
} from '@schemas/userRefreshToken.schema';
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
