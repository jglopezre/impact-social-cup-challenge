import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserAuthResolver } from './user-auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuth } from './entities/user-auth.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAuth, User])],
  providers: [UserAuthResolver, UserAuthService],
})
export class UserAuthModule {}
