import { Injectable } from '@nestjs/common';
import { InstagramRepository } from './instagram.repository';

@Injectable()
export class InstagramService {
  constructor(private instagramRepo: InstagramRepository) {}

  deserialize(serialized: string) {
    const serializedJson = JSON.parse(serialized);
    this.instagramRepo.deserialize(serializedJson);
  }

  async login(username: string, password: string) {
    const serialized = await this.instagramRepo.login(username, password);
    return serialized;
  }

  logout() {
    return this.instagramRepo.logout();
  }

  // TODO: WIP
  getProfileInfo() {
    return this.instagramRepo.getProfileInfo();
  }
}
