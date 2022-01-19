import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrService } from './dr.service';
import { CreateDrDto } from './dto/create-dr.dto';
import { UpdateDrDto } from './dto/update-dr.dto';

@Controller('dr')
export class DrController {
  constructor(private readonly drService: DrService) {}

  @Post()
  create(@Body() createDrDto: CreateDrDto) {
    return this.drService.create(createDrDto);
  }

  @Get()
  findAll() {
    return this.drService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrDto: UpdateDrDto) {
    return this.drService.update(+id, updateDrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drService.remove(+id);
  }
}
