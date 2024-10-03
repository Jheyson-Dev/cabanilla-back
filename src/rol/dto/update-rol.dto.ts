import { InputType, PartialType } from '@nestjs/graphql';
import { CreateRolDto } from './create-rol.dto';

@InputType()
export class UpdateRolDto extends PartialType(CreateRolDto) {}
