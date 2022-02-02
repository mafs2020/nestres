/* eslint-disable prettier/prettier */
import { Model, Column, PrimaryKey, Table, AutoIncrement, TableOptions, DeletedAt } from 'sequelize-typescript';

const options: TableOptions = {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
  modelName: 'users',
  }
  
@Table(options)
export class UserEntity extends Model {
    @PrimaryKey @AutoIncrement @Column
  id: number;

  @Column
  name: string;

  @Column
  password: string;

  @Column
  rol: string;

  @Column @DeletedAt
  deletedAt?: Date;
}
