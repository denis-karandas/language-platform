import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'modules/users/users.service';
import { TokensService } from 'modules/tokens/tokens.service';
import { RegistrationDto } from 'modules/auth/dto';
import { UserDto } from 'modules/auth/dto/user.dto';
import { User } from 'schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokensService: TokensService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return null;
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (user && isValid) {
      return user;
    }
    return null;
  }

  async registration(dto: RegistrationDto) {
    if (!dto) {
      throw new UnauthorizedException('Unauthorized exception');
    }
    const userExists = await this.usersService.findByEmail(dto.email);
    if (userExists) {
      throw new UnauthorizedException('Unauthorized exception');
    }
    const user = await this.usersService.create(dto);
    if (!user) {
      throw new UnauthorizedException('Unauthorized exception');
    }

    const tokens = this.tokensService.generateTokens({ id: user._id });

    await this.tokensService.saveRefreshToken(user, tokens.refreshToken);

    return {
      user,
      ...tokens,
    };
  }

  async login(user: User) {
    const payload = { id: user._id };
    const tokens = this.tokensService.generateTokens(payload);

    await this.tokensService.saveRefreshToken(user, tokens.refreshToken);

    const userDto = new UserDto(user);

    return {
      user: userDto,
      ...tokens,
    };
  }

  async logout(user: User) {
    const userToken = await this.tokensService.deleteRefreshToken(user);
    if (!userToken) {
      throw new UnauthorizedException('Unauthorized exception');
    }

    return userToken;
  }
}
