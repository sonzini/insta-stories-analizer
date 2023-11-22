import { Injectable } from '@nestjs/common';
import { TokenStoreRepository } from './token-store.repository';

@Injectable()
export class TokenStoreService {
  constructor(private tokenStoreRepo: TokenStoreRepository) {}

  getTokens() {
    return this.tokenStoreRepo.getTokens();
  }

  getToken(id: string) {
    return this.tokenStoreRepo.getToken(id);
  }

  saveToken(token: string) {
    return this.tokenStoreRepo.saveToken(token);
  }

  deleteToken(id: string) {
    return this.tokenStoreRepo.deleteToken(id);
  }
}
