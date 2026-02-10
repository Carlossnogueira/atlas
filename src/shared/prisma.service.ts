import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import 'dotenv/config'
import { env } from "prisma/config";

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {

    constructor() {
        const adapter = new PrismaPg({ connectionString: env("DATABASE_URL") })
        super({ adapter })
    }

    async onModuleInit() {
        try {
            await this.$connect()
        } catch (err) {
            console.log(err)
        }
    }

    async onModuleDestroy() {
        await this.$disconnect()
    }

}