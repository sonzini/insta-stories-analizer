import { Controller, Get, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { GetMeReqDto } from './dtos/get-me-req.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserResponseDto } from './dtos/user-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO: Type
  @Serialize(UserResponseDto)
  @Get('me')
  async me() {
    // async me(@Req() req: GetMeReqDto) {
    // const { userId } = req;

    const userId = '0e2aafc4-f875-4c6f-9321-dc6df42be21b'; // TODO: Get id from headers

    console.log('handler running');

    const user = await this.usersService.findOneById(userId);

    return {
      user,
    };
  }
}
