/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

   @Post('login')
   login(@Body() body) {
       console.log('body :>> ', body);
//    login (@Body() createUserDto: CreateUserDto) {
       return 'this.userService.findAll()';
   }

   @Post('register')
   register() {
//    login (@Body() createUserDto: CreateUserDto) {
       return 'this.userService.findAll()';
   }
}
