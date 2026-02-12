import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [
    UsersModule, 
    SharedModule, 
    AuthModule, 
    ConfigModule.forRoot({
      envFilePath: '../.env',
      isGlobal: true
    }
  )],
  controllers: [AppController],
  providers: [
    AppService,
    AuthModule
  ],
})
export class AppModule { }
