import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create.user.dto";
import { User } from "../entity/user.entity";
import { IUserRepository } from "./user.repository";
import { PrismaService } from "src/shared/prisma.service";


@Injectable()
export class PrismaUserRepository implements IUserRepository {

    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserDto): Promise<User> {
        return this.prisma.user.create({
            data: {
                name: data.name!,
                email: data.email!,
                password: data.password!,
                role: 'staff'
            }
        })
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany()
    }

}