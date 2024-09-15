import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Campos obligatorios

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field areaId cannot be empty.' })
  @IsInt({ message: 'The field areaId must be a valid integer.' })
  areaId: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field personId cannot be empty.' })
  @IsInt({ message: 'The field personId must be a valid integer.' })
  personId: number;
}
