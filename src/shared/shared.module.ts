import { Module } from "@nestjs/common";
import { CryptoModule } from "./crypto/crypto.module";
import { PrismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { CryptoService } from "./crypto/crypto.service";

@Module({
    providers: [PrismaService, CryptoService],
    exports: [PrismaService, CryptoService]
})
export class SharedModule {}