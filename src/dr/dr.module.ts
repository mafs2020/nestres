import { Module } from '@nestjs/common';
import { DrService } from './dr.service';
import { DrController } from './dr.controller';

@Module({
  controllers: [DrController],
  providers: [DrService],
})
export class DrModule {}
