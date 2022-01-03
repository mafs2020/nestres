/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restaurants } from './resturnts.entity';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantService } from './restaurant/restaurant.service';

@Module({
    controllers: [RestaurantsController],
    imports: [SequelizeModule.forFeature([Restaurants])],
    providers: [RestaurantService],
})
export class RestaurantsModule {}
