/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('api/restaurants')
export class RestaurantsController {
    @Get()
    findAll(): string {
      return 'restaurants';
    }
}
