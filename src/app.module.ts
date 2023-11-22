import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { InstagramModule } from './instagram/instagram.module';
import { TokenStoreModule } from './token-store/token-store.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { IgUser } from './instagram/ig-user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, IgUser],
      synchronize: true,
    }),
    AuthModule,
    InstagramModule,
    TokenStoreModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
