import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';

import { IgUserService } from 'src/instagram/ig-user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { TokenData } from 'src/token-store/dtos/token.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly igUserService: IgUserService,
  ) {}

  async create(createUserData: CreateUserDto) {
    const { externalId } = createUserData;

    const secret = uuidv4();

    const igUser =
      await this.igUserService.findOrCreateByExternalId(externalId);

    const user = this.userRepo.create({ secret, igUser });

    return this.userRepo.save(user);
  }

  async findOneById(userId: string) {
    const user = await this.userRepo.findOne({
      where: { id: userId },
      relations: ['igUser'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOneByExternalId(externalId: string) {
    const user = await this.userRepo.findOne({
      where: {
        igUser: { externalId },
      },
      relations: ['igUser'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOrCreateUserByExternalToken(externalToken: TokenData) {
    const externalId = externalToken.uuid;

    try {
      const user = await this.findOneByExternalId(externalId);
      return user;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return this.create({ externalId });
      }

      throw error;
    }
  }
}
