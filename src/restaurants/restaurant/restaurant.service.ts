/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Restaurants } from '../resturnts.entity';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectModel(Restaurants)
        private RestaurantsModel: typeof Restaurants,
    ) {}

    
}
