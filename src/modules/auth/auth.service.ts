import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaUserRepository } from '../users/repository/prisma.user.repository';
import { LoginDto } from './dto/login.dto';
import { CryptoService } from 'src/shared/crypto/crypto.service';
import { User } from '../users/entity/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: PrismaUserRepository,
        private readonly cryptoService : CryptoService,
        private readonly jwtService: JwtService
    ) { }

    async login(dto : LoginDto)  {

        const user = await this.userRepository.findByEmail(dto.email)

        if(!user){
            throw new UnauthorizedException('Invalid credentials')
        }

        const passwordMath = await this.cryptoService.compare(dto.password, user.password)

        if(!passwordMath){
            throw new UnauthorizedException('Invalid credentials')
        }

        const payload = {
            sub: user.id,
            role: user.role
        }

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
