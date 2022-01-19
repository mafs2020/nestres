import { Injectable } from '@nestjs/common';
import { CreateDrDto } from './dto/create-dr.dto';
import { UpdateDrDto } from './dto/update-dr.dto';

@Injectable()
export class DrService {
  create(createDrDto: CreateDrDto) {
    return 'This action adds a new dr';
  }

  findAll() {
    return `This action returns all dr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dr`;
  }

  update(id: number, updateDrDto: UpdateDrDto) {
    return `This action updates a #${id} dr`;
  }

  remove(id: number) {
    return `This action removes a #${id} dr`;
  }
}
