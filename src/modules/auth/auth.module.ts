import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaUserRepository } from '../users/repository/prisma.user.repository';
import { SharedModule } from 'src/shared/shared.module';
import { CryptoService } from 'src/shared/crypto/crypto.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';
import { UsersModule } from '../users/users.module';


@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
  ],
  imports: [
    SharedModule,
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ]
})
export class AuthModule { }
