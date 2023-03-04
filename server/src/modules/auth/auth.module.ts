import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '@modules/auth/auth.controller';
import { AuthService } from '@modules/auth/auth.service';
import { UsersModule } from '@modules/users/users.module';
import { TokensModule } from '@modules/tokens/tokens.module';
import {
  LocalStrategy,
  JwtAccessTokenStrategy,
  JwtRefreshTokenStrategy,
} from '@modules/auth/strategies';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule, UsersModule, TokensModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtAccessTokenStrategy,
    JwtRefreshTokenStrategy,
  ],
})
export class AuthModule {}
