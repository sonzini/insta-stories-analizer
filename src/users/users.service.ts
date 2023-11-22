import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IgUserService } from 'src/instagram/ig-user.service';

import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly igUserService: IgUserService,
  ) {}

  async create(createUserData: CreateUserDto) {
    const { externalId } = createUserData;

    const igUser =
      await this.igUserService.findOrCreateByExternalId(externalId);

    const user = this.userRepo.create({ igUser });

    return this.userRepo.save(user);
  }

  async findOneById(userId: string) {
    return this.userRepo.findOneBy({ id: userId });
  }

  // TODO: Type
  async findOrCreateUserByExternalToken(externalToken: { id: string }) {
    const externalId = externalToken.id;

    const user = await this.userRepo.findOne({
      where: {
        igUser: {
          externalId,
        },
      },
      relations: ['igUser'],
    });

    if (!user) {
      return this.create({ externalId });
    }

    return user;
  }
}
