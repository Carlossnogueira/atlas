import { CreateUserDto } from "../dto/create.user.dto";
import { User } from "../entity/user.entity";

export interface IUserRepository{
    create(data: CreateUserDto) : Promise<User>
    findAll(): Promise<User[]>
}