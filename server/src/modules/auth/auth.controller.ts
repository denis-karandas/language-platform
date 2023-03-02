import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Get,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from 'modules/auth/auth.service';
import { RegistrationDto, LoginDto, UserDto } from 'modules/auth/dto';
import { TokensService } from 'modules/tokens/tokens.service';
import { User } from 'schemas/user.schema';
import { LocalAuthGuard } from 'guards/local.guard';
import { JwtRefreshAuthGuard } from 'guards/jwt-refresh.guard';
import { JwtAuthGuard } from 'guards/jwt.guard';

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokensService: TokensService,
  ) {}

  @Post('registration')
  async registration(
    @Body() dto: RegistrationDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const response = await this.authService.registration(dto);

    this.tokensService.setRefreshTokenInCookie(res, response.refreshToken);

    res.status(200).json({
      user: response.user,
      accessToken: response.accessToken,
    });
    return;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const response = await this.authService.login(req.user as User);

    this.tokensService.setRefreshTokenInCookie(res, response.refreshToken);

    res.status(200).json({
      user: response.user,
      accessToken: response.accessToken,
    });
    return;
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const response = await this.authService.logout(req.user as User);

    res.clearCookie(TokensService.REFRESH_TOKEN_NAME);

    return { status: 'success' };
  }

  @UseGuards(JwtRefreshAuthGuard)
  @Get('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const response = await this.authService.login(req.user as User);

    this.tokensService.setRefreshTokenInCookie(res, response.refreshToken);

    res.status(200).json({
      user: response.user,
      accessToken: response.accessToken,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  async loginByAccessToken(@Req() req: Request) {
    return new UserDto(req.user as User);
  }
}
