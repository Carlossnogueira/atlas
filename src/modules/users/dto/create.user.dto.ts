import { IsEmail, IsString, Length, MinLength } from "class-validator"

export class CreateUserDto{
    
    @IsString()
    @Length(1,50, {message: "Name is too short"})
    public name?:string

    @IsEmail()
    public email?:string

    @MinLength(8)
    public password?:string
}