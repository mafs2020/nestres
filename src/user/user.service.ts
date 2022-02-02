/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UserEntity } from '../user/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity)
  private readonly UserModel: typeof UserEntity) {}

  async create(createUserDto: CreateUserDto) {
    return await this.UserModel.create(createUserDto);
  }
  
  async findAll() {
    console.log('UserModel :>> ', this.UserModel);
    return await this.UserModel.findAll();
  }
  
  async findOne(id: number) {
    return await this.UserModel.findOne({ where: { id } });
  }
  
  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.UserModel.update(updateUserDto, { where: { id } });
  }

  async remove(id: number) {
    return await this.UserModel.destroy({where: { id }});
  }
}
