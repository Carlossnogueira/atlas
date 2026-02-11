import { CreateUserDto } from "../dto/create.user.dto";
import { UpdateUserDto } from "../dto/update.user.dto";
import { User } from "../entity/user.entity";

export interface IUserRepository {
    create(data: CreateUserDto): Promise<User>
    findAll(): Promise<User[]>
    findById(id: number)
    update(id: number, data: UpdateUserDto)
}