/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Restaurants } from './restaurants/resturnts.entity';
import { UserEntity } from './user/entities/user.entity';

@Module({
    imports: [SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Mafs1920',
        database: 'restaurants',
        models: [
            Restaurants,
            UserEntity
        ],
    })]
})

export class DBModule {}