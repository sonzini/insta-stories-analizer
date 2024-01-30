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
    // const externalToken = await this.instagramService.login(username, password);

    // TODO: REMOVE THIS. Temporal token to avoid requesting it to instagram
    // -----------------------------
    const externalTokenId = '2958cf8b-0ad4-40ac-af1a-33f46dcb0bd8';
    const externalToken =
      await this.tokenStoreService.getToken(externalTokenId);
    this.instagramService.deserialize(externalToken);
    // -----------------------------

    // Get or create user
    const user =
      await this.userService.findOrCreateUserByExternalToken(externalToken);

    // Save instagram token
    // await this.tokenStoreService.saveToken(user.id, externalToken);

    // TODO: Create auth token
    console.log({ user, externalToken });
    const accessToken = 'auth-token';
    const refreshToken = 'refresh-token';

    // TODO: Return auth token
    return {
      accessToken,
      refreshToken,
      user,
    };
  }

  // TODO: Check how we list instagram with id and token
  async logout(id: string) {
    await this.tokenStoreService.deleteToken(id);
    return this.instagramService.logout();
  }
}
