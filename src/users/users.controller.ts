import { Controller, Get, Req } from '@nestjs/common';

import { UsersService } from './users.service';
import { GetMeReqDto } from './dtos/get-me-req.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO: Type
  @Get('me')
  async me(@Req() req: GetMeReqDto) {
    const { userId } = req;

    const user = await this.usersService.findOneById(userId);

    return {
      user,
    };
  }
}
