import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update.user.dto';

@Controller('users')
export class UsersController {


    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto)
    }

    @Get()
    findAll() {
        return this.usersService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.usersService.findById(Number(id))
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() dto : UpdateUserDto
    ){
        return this.usersService.update(Number(id), dto)
    }
}
