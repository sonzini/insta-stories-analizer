import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IgUser } from './ig-user.entity';

@Injectable()
export class IgUserService {
  constructor(
    @InjectRepository(IgUser)
    private readonly igUserRepo: Repository<IgUser>,
  ) {}

  async findOrCreateByExternalId(externalId: string) {
    const igUser = await this.igUserRepo.findOne({
      where: {
        externalId,
      },
    });

    if (!igUser) {
      const newIgUser = this.igUserRepo.create({
        externalId,
      });

      return this.igUserRepo.save(newIgUser);
    }

    return igUser;
  }
}
