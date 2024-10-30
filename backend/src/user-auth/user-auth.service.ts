import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAuth } from './entities/user-auth.entity';
import { User } from 'src/users/entities/user.entity';
import { ulid } from 'ulid';

@Injectable()
export class UserAuthService {
  constructor(
    @InjectRepository(UserAuth)
    private userAuthRepository: Repository<UserAuth>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async logoutUser (token: string) {
    const userAuthInfo = await this.userAuthRepository.findOne({
      where: { token }
    })

    if(!userAuthInfo) return null;

    const result = await this.userAuthRepository.delete(userAuthInfo.id);

    return result.affected !== 0 ? token : null
  }

  async loginUser(username: string, password: string) {
    
    const user = await this.userRepository.findOne({
      where: { username },
    })

    if(user?.username !== username || user?.password !== password) return null;
    
    const userAuthorization = await this.userAuthRepository.create({
      user,
      token: ulid(),
    });

    console.log(userAuthorization);

    return this.userAuthRepository.save(userAuthorization);

    
  }
}
