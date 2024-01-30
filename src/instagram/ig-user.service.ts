import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IgUser } from './ig-user.entity';
import { InstagramService } from './instagram.service';

@Injectable()
export class IgUserService {
  constructor(
    @InjectRepository(IgUser)
    private readonly igUserRepo: Repository<IgUser>,
    private readonly instagramService: InstagramService,
  ) {}

  async findOrCreateByExternalId(externalId: string) {
    const igUser = await this.igUserRepo.findOne({
      where: {
        externalId,
      },
    });

    if (!igUser) {
      // Get user from instagram
      const externalUser = await this.instagramService.getProfileInfo();

      const payload = {
        externalId,
        username: externalUser.username,
        // fullName: externalUser.fullName,
        // profilePicUrl: externalUser.profilePicUrl,
      };

      const newIgUser = this.igUserRepo.create(payload);

      return this.igUserRepo.save(newIgUser);
    }

    return igUser;
  }
}
