/* eslint-disable prettier/prettier */
import {
    IsBoolean, IsString,
    // validate,
    // validateOrReject,
    // Contains,
    // IsInt,
    // Length,
    // IsEmail,
    // IsFQDN,
    // IsDate,
  } from 'class-validator';
  
  export class RestaurantsDTO {

    // @IsNotEmpty({message: 'campo vcio ->booleno'})
    @IsBoolean({message: 'campo erroneo ->booleno'})
    state: boolean;

    @IsString({message: 'campo erroneo -> nombre'})
    name: string;

    // @IsInt({message: 'campo erroneo -> id'})
    // id?: number;

    @IsString({message: 'campo erroneo -> ubicacion'})
    ubicacion: string;

    @IsString({message: 'campo erroneo -> description'})
    description: string;

}