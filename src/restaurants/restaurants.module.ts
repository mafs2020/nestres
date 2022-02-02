/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restaurants } from './resturnts.entity';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { WsS3Service } from './ws-s3/ws-s3.service';
import { UserEntity } from 'src/user/entities/user.entity';

// import { ConfigModule } from '@nestjs/config';

@Module({
    controllers: [RestaurantsController],
    imports: [
        // ConfigModule.forRoot(),
        SequelizeModule.forFeature([
            Restaurants,
            UserEntity
        ]),
    ],
    providers: [
        RestaurantService,
        WsS3Service
    ],
})


export class RestaurantsModule {}
