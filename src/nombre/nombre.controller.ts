import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NombreService } from './nombre.service';
import { CreateNombreDto } from './dto/create-nombre.dto';
import { UpdateNombreDto } from './dto/update-nombre.dto';

@Controller('nombre')
export class NombreController {
  constructor(private readonly nombreService: NombreService) {}

  @Post()
  create(@Body() createNombreDto: CreateNombreDto) {
    return this.nombreService.create(createNombreDto);
  }

  @Get()
  findAll() {
    return this.nombreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nombreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNombreDto: UpdateNombreDto) {
    return this.nombreService.update(+id, updateNombreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nombreService.remove(+id);
  }
}
