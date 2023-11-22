import { IsString, IsNotEmpty } from 'class-validator';

export class GetMeReqDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
}
