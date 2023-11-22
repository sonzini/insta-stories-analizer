import { Injectable } from '@nestjs/common';
import { InstagramService } from 'src/instagram/instagram.service';
import { TokenStoreService } from 'src/token-store/token-store.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private instagramService: InstagramService,
    private tokenStoreService: TokenStoreService,
    private userService: UsersService,
  ) {}

  // TODO: Return auth token
  // TODO: Store data securely
  async login(username: string, password: string) {
    // Login to instagram
    const externalToken = await this.instagramService.login(username, password);

    // Get or create user
    const user =
      await this.userService.findOrCreateUserByExternalToken(externalToken);

    // Save instagram token
    const id = await this.tokenStoreService.saveToken(externalToken);

    // TODO: Create auth token

    // TODO: Return auth token
    return id;
  }

  // TODO: Check how we list instagram with id and token
  async logout(id: string) {
    await this.tokenStoreService.deleteToken(id);
    return this.instagramService.logout();
  }
}
