import { Module } from '@nestjs/common';
import { InstagramService } from './instagram.service';
import { InstagramRepository } from './instagram.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IgUser } from './ig-user.entity';
import { IgUserService } from './ig-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([IgUser])],
  providers: [InstagramService, InstagramRepository, IgUserService],
  exports: [InstagramService, IgUserService],
})
export class InstagramModule {}
