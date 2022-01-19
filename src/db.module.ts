/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restaurants } from './restaurants/resturnts.entity';

@Module({
    imports: [SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '++++++++',
        database: 'restaurants',
        models: [Restaurants],
    })]
})

export class DBModule {}