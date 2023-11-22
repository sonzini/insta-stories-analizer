import { Module } from '@nestjs/common';
import { TokenStoreService } from './token-store.service';
import { TokenStoreRepository } from './token-store.repository';

@Module({
  providers: [TokenStoreService, TokenStoreRepository],
  exports: [TokenStoreService],
})
export class TokenStoreModule {}
