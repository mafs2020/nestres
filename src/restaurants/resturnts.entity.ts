/* eslint-disable prettier/prettier */
import { Model, Column, PrimaryKey, Table, AutoIncrement, TableOptions, DeletedAt } from 'sequelize-typescript';
// import { DeleteDateColumn } from 'typeorm';

const options: TableOptions = {
  freezeTableName: true,
  createdAt: false,
  updatedAt: false,
  modelName: 'restaurant',
  // paranoid
}

@Table(options)

export class Restaurants extends Model {
  @PrimaryKey @AutoIncrement @Column
  id: number;

  @Column
  name: string;

  @Column
  ubicacion: string;

  @Column
  image: string;

  @Column
  description: string;

  @Column
  state: boolean;

  @Column @DeletedAt
  deletedAt?: Date;
  // deletedAt?: 'destroyTime'
}