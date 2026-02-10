import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {


  create(userDto: CreateUserDto): User {

    const user = new User({
      id: 0,
      name: userDto.name,
      email: userDto.email,
      password: userDto.password,
      role: 'staff',
      createdAt: new Date(),
      updatedAt: new Date()
    })


    return user
  }
}
