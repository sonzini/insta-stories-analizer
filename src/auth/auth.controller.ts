import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { LoginResponseDto } from './dtos/login-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Serialize(LoginResponseDto)
  @Post('login')
  async login(@Body() body: LoginDto) {
    const { username, password } = body;

    const { accessToken, refreshToken, user } = await this.authService.login(
      username,
      password,
    );

    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  @Post('logout')
  logout() {
    const id = '1'; // TODO: Get id from headers
    return this.authService.logout(id);
  }
}
