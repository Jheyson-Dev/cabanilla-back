import { Field, Int, PartialType } from '@nestjs/graphql';
import { CreateRolsPermissionsDto } from './create-rols-permissions.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateRolsPermisssionsDto extends PartialType(
  CreateRolsPermissionsDto,
) {
  // Campos obligatorios

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field rolId cannot be empty.' })
  @IsInt({ message: 'The field rolId must be a valid integer.' })
  rolId: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field permissionId cannot be empty.' })
  @IsInt({ message: 'The field permissionId must be a valid integer.' })
  permissionId: number;
}
