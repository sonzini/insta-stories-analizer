import { IsString, IsNotEmpty } from 'class-validator';

// TODO: Check if this is working
export class GetMeReqDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
}
