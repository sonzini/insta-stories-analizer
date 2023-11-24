import { Expose } from 'class-transformer';
import { IgUserDto } from 'src/instagram/dtos/ig-user.dto';

export class UserDto {
  @Expose()
  id: string;

  @Expose()
  igUserId: string;

  @Expose()
  igUser: IgUserDto;
}
