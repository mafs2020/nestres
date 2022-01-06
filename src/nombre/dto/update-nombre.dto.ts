import { PartialType } from '@nestjs/mapped-types';
import { CreateNombreDto } from './create-nombre.dto';

export class UpdateNombreDto extends PartialType(CreateNombreDto) {}
