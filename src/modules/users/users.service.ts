import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entity/user.entity';
import { PrismaUserRepository } from './repository/prisma.user.repository';

@Injectable()
export class UsersService {

  constructor(private readonly userRepository: PrismaUserRepository) {}


  create(userDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(userDto)
  }

  findAll() : Promise<User[]> {
    return this.userRepository.findAll()
  }

}
