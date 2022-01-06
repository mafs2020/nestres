import { Module } from '@nestjs/common';
import { NombreService } from './nombre.service';
import { NombreController } from './nombre.controller';

@Module({
  controllers: [NombreController],
  providers: [NombreService]
})
export class NombreModule {}
