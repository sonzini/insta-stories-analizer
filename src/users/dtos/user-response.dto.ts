import { Expose } from 'class-transformer';
import { UserDto } from './user.dto';

export class UserResponseDto {
  @Expose()
  user: UserDto;
}
