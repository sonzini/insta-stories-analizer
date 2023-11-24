import { BadRequestException, Injectable } from '@nestjs/common';
import { InstagramRepository } from './instagram.repository';

@Injectable()
export class InstagramService {
  constructor(private instagramRepo: InstagramRepository) {}

  deserialize(serialized: string) {
    const serializedJson = JSON.parse(serialized);
    this.instagramRepo.deserialize(serializedJson);
  }

  async login(username: string, password: string) {
    try {
      const serialized = await this.instagramRepo.login(username, password);
      return serialized;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Invalid credentials');
    }
  }

  logout() {
    return this.instagramRepo.logout();
  }

  // TODO: WIP
  getProfileInfo() {
    return this.instagramRepo.getProfileInfo();
  }
}
