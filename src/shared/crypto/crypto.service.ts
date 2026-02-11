import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'


@Injectable()
export class CryptoService{
    
    private readonly saltRounds = 10

    async hash(value : string): Promise<string> {
        return await bcrypt.hashSync(value, this.saltRounds)
    }

    async compare(value: string, hash: string) : Promise<boolean>{
        return await bcrypt.compareSync(value,hash)
    }

}