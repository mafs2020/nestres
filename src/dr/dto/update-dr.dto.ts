import { PartialType } from '@nestjs/mapped-types';
import { CreateDrDto } from './create-dr.dto';

export class UpdateDrDto extends PartialType(CreateDrDto) {}
