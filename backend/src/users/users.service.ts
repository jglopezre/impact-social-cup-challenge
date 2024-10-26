import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor (@InjectRepository(User) private userRepository: Repository<User>) {}
  
  findOne(id: string) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }
  
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(collaborator: CreateUserInput) {
    const newUser = this.userRepository.create(collaborator);
    return this.userRepository.save(newUser);
  }


/*
  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  } */
}
