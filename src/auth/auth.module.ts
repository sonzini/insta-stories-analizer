import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { InstagramModule } from 'src/instagram/instagram.module';
import { TokenStoreModule } from 'src/token-store/token-store.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [InstagramModule, TokenStoreModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
