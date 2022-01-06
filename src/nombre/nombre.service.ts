import { Injectable } from '@nestjs/common';
import { CreateNombreDto } from './dto/create-nombre.dto';
import { UpdateNombreDto } from './dto/update-nombre.dto';

@Injectable()
export class NombreService {
  create(createNombreDto: CreateNombreDto) {
    return 'This action adds a new nombre';
  }

  findAll() {
    return `This action returns all nombre`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nombre`;
  }

  update(id: number, updateNombreDto: UpdateNombreDto) {
    return `This action updates a #${id} nombre`;
  }

  remove(id: number) {
    return `This action removes a #${id} nombre`;
  }
}
