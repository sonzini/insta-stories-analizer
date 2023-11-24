import { Expose } from 'class-transformer';
import { UserDto } from 'src/users/dtos/user.dto';

export class LoginResponseDto {
  @Expose()
  accessToken: string;

  @Expose()
  refreshToken: string;

  @Expose()
  user: UserDto;
}
