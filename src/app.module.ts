/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// DB
import { DBModule } from './db.module';

// restaurantes
import { RestaurantsModule } from './restaurants/restaurants.module';

import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';


// console.log('process.env :>> ', process.env);

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RestaurantsModule,
    DBModule,
    UserModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
