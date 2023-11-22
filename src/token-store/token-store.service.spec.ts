import { Test, TestingModule } from '@nestjs/testing';
import { TokenStoreService } from './token-store.service';

describe('TokenStoreService', () => {
  let service: TokenStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenStoreService],
    }).compile();

    service = module.get<TokenStoreService>(TokenStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
