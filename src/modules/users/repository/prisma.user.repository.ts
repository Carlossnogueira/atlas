import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create.user.dto";
import { User } from "../entity/user.entity";
import { IUserRepository } from "./user.repository";
import { PrismaService } from "src/shared/prisma/prisma.service";


@Injectable()
export class PrismaUserRepository implements IUserRepository {

    constructor(private prisma: PrismaService) { }

    async create(data: {
        name: string,
        email: string,
        password: string
    }): Promise<User> {
        return this.prisma.user.create({
            data: {
                ...data,
                role: 'staff'
            }

        })
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany()
    }


}