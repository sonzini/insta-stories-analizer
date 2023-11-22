import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { username, password } = body;

    return this.authService.login(username, password);
  }

  @Post('logout')
  logout() {
    const id = '1'; // TODO: Get id from headers
    return this.authService.logout(id);
  }
}
