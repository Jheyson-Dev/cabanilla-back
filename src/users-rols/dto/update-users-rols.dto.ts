import { Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUsersRolsDto } from './create-users-rols.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateUsersRolsDto extends PartialType(CreateUsersRolsDto) {
  // Campos obligatorias

  @Field(() => Int)
  @IsInt({ message: 'The field userId must be a valid integer.' })
  @IsNotEmpty({ message: 'The field userId cannot be empty.' })
  userId: number;

  @Field(() => Int)
  @IsInt({ message: 'The field rolId must be a valid integer.' })
  @IsNotEmpty({ message: 'The field rolId cannot be empty.' })
  rolId: number;
}
