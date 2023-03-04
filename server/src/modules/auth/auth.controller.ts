import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Get,
  UseGuards,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '@modules/auth/auth.service';
import { RegistrationDto } from '@modules/auth/dto';
import { TokensService } from '@modules/tokens/tokens.service';
import { UsersService } from '@modules/users/users.service';
import { User as UserModel } from '@schemas/user.schema';
import { LocalAuthGuard } from '@guards/local.guard';
import { JwtRefreshAuthGuard } from '@guards/jwt-refresh.guard';
import { JwtAuthGuard } from '@guards/jwt.guard';
import { User } from '@decorators/user.decorator';

@Controller('api/auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private tokensService: TokensService,
  ) {}

  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: RegistrationDto,
  ) {
    const response = await this.authService.registration(dto);

    this.tokensService.setRefreshTokenInCookie(res, response.refreshToken);

    return {
      user: response.user,
      accessToken: response.accessToken,
    };
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @User() user: UserModel,
  ) {
    const response = await this.authService.login(user);

    this.tokensService.setRefreshTokenInCookie(res, response.refreshToken);

    return {
      user: response.user,
      accessToken: response.accessToken,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @User() user: UserModel,
  ) {
    await this.authService.logout(user);

    res.clearCookie(TokensService.REFRESH_TOKEN_NAME);

    return { status: 'success' };
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Get('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @User() user: UserModel,
  ) {
    const response = await this.authService.login(user);

    this.tokensService.setRefreshTokenInCookie(res, response.refreshToken);

    return {
      user: response.user,
      accessToken: response.accessToken,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  @HttpCode(HttpStatus.OK)
  async loginByAccessToken(@Req() req: Request, @User() user: UserModel) {
    return this.usersService.getResponseModel(user);
  }
}
