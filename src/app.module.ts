/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// DB
import { DBModule } from './db.module';

// restaurantes
import { RestaurantsModule } from './restaurants/restaurants.module';

import { ConfigModule } from '@nestjs/config';
console.log(`app accessKeyId: ${process.env.AWS_S3_ACCESS_KEY},`);
console.log(`app secretAccessKey: ${process.env.AWS_S3_KEY_SECRET},`);

// console.log('process.env :>> ', process.env);

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RestaurantsModule,
    DBModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
