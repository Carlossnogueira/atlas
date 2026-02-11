import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entity/user.entity';
import { PrismaUserRepository } from './repository/prisma.user.repository';
import { CryptoService } from 'src/shared/crypto/crypto.service';


@Injectable()
export class UsersService {

  constructor(
    private readonly userRepository: PrismaUserRepository,
    private readonly cryptoService : CryptoService
  ) {}


  async create(dto: CreateUserDto)  {
    const hashedPassword : string = await this.cryptoService.hash(dto.password!)

    const user = await this.userRepository.create({
      name: dto.name!,
      email: dto.email!,
      password: hashedPassword
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
    
  }

  findAll() : Promise<User[]> {
    return this.userRepository.findAll()
  }

}
