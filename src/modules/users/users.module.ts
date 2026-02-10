import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/shared/prisma.module';
import { PrismaUserRepository } from './repository/prisma.user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaUserRepository
  ]
})
export class UsersModule {}
