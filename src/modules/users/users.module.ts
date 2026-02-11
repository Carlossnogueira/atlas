import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SharedModule } from 'src/shared/shared.module';
import { PrismaUserRepository } from './repository/prisma.user.repository';

@Module({
  imports: [SharedModule],
  controllers: [UsersController],
  providers: [
    PrismaUserRepository,
    UsersService,
  ]
})
export class UsersModule {}
