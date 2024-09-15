import { PartialType } from '@nestjs/graphql';
import { CreateRolDto } from './create-rol.dto';

export class UpdateRolDto extends PartialType(CreateRolDto) {}
