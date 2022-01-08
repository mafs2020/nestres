/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Restaurant } from '../interfaces/restaurant';
import { Restaurants } from '../resturnts.entity';

@Injectable()
export class RestaurantService {
    constructor(
        @InjectModel(Restaurants)
        private RestaurantsModel: typeof Restaurants,
    ) {}

    async create(restaurant: Restaurant) {
        try {
            return await this.RestaurantsModel.create(restaurant);
            
        } catch (error) {
            return error;
        }
    }
    
    async findAll() {
        return await this.RestaurantsModel.findAll();
    }
    
    async findOne(id: number) {
        return await this.RestaurantsModel.findByPk( id );
    }
    
    async update(id: number, restaurant: Restaurant) {
        return await this.RestaurantsModel.update(restaurant , { where: { id } } );
    }
    
    async remove(id: number) {
        return await this.RestaurantsModel.destroy({where: { id }});
    }

    
}
