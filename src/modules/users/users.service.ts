import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './entity/user.entity';
import { PrismaUserRepository } from './repository/prisma.user.repository';
import { CryptoService } from 'src/shared/crypto/crypto.service';
import { UpdateUserDto } from './dto/update.user.dto';


@Injectable()
export class UsersService {

  constructor(
    private readonly userRepository: PrismaUserRepository,
    private readonly cryptoService: CryptoService
  ) { }


  async create(dto: CreateUserDto) {
    const hashedPassword: string = await this.cryptoService.hash(dto.password!)

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

  async findAll(): Promise<Partial<User>[]> {

    return (await this.userRepository.findAll()).map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }))
  }

  async findById(id: number) {
    const user = await this.userRepository.findById(id)

    if (!user)
      throw new NotFoundException('User not found')

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  async update(id: number, dto: UpdateUserDto) {

    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    let password = user.password

    if (dto.password) {
      password = await this.cryptoService.hash(dto.password)
    }

    const updatedUser = await this.userRepository.update(id, {
      name: dto.name!,
      email: dto.email!,
      password,
    })

    return {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
    }
  }


}
