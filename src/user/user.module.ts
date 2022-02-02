/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserEntity } from './entities/user.entity';

@Module({
  controllers: [UserController],
  imports: [
    SequelizeModule.forFeature([
      UserEntity
  ]),
  ],
  providers: [
    UserService,
  ],
})
export class UserModule {}
