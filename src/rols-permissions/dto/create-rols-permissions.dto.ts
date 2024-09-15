import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateRolsPermissionsDto {
  @Field(() => Int)
  @IsNotEmpty({ message: 'The field rolId cannot be empty.' })
  @IsInt({ message: 'The field rolId must be a valid integer.' })
  rolId: number;

  @Field(() => Int)
  @IsInt({ message: 'The field permissionId must be a valid integer.' })
  @IsNotEmpty({ message: 'The field permissionId cannot be empty.' })
  permissionId: number;

  @Field()
  @IsString({ message: 'The field table must be a valid string.' })
  @IsNotEmpty({ message: 'The field table cannot be empty.' })
  @Length(4, 50, {
    message: 'The field table must be between 4 and 50 characters long.',
  })
  table: string;
}
