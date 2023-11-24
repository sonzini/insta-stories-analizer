import { Expose } from 'class-transformer';

export class IgUserDto {
  @Expose()
  id: string;

  // @Expose()
  // externalId: string;
}
