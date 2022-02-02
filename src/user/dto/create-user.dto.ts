/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty({message: 'fltn dtoss'})
    @IsString({message: 'campo erroneo -> ubicacion'})
    name: string;
    
    @IsNotEmpty({message: 'fltn dtoss'})
    @IsString({message: 'campo erroneo -> password'})
    password: string;
    
    @IsNotEmpty({message: 'fltn dtoss'})
    @IsString({ message: 'falta rol del usuario'})
    // @IsNumber({  } as IsNumberOptions)
    rol: string;
}
