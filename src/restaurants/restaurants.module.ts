/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restaurants } from './resturnts.entity';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { WsS3Service } from './ws-s3/ws-s3.service';

// import { ConfigModule } from '@nestjs/config';

console.log(`accessKeyId: ${process.env.AWS_S3_ACCESS_KEY},`);
console.log(`secretAccessKey: ${process.env.AWS_S3_KEY_SECRET},`);

@Module({
    controllers: [RestaurantsController],
    imports: [
        // ConfigModule.forRoot(),
        SequelizeModule.forFeature([Restaurants]),
    ],
    providers: [
        RestaurantService,
        WsS3Service
    ],
})


export class RestaurantsModule {}
