import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// DB
import { DBModule } from './db.module';

// restaurantes
import { RestaurantsModule } from './restaurants/restaurants.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [RestaurantsModule, DBModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
