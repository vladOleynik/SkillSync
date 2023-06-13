import {IsEmail, IsNotEmpty} from "class-validator";

export class AuthSignDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    password: string;
}