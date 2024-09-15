import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

@InputType()
export class CreateStoreDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a string' })
  @Length(4, 255, {
    message: 'The field name must be between 3 and 50 characters long.',
  })
  nombre: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field ubicacion cannot be empty.' })
  @IsString({ message: 'The field ubicacion must be a string' })
  @Length(4, 255, {
    message: 'The field ubicacion must be between 4 and 255 characters long.',
  })
  ubicacion: string;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field areaId cannot be empty.' })
  @IsInt({ message: 'The field areaId must be a valid integer.' })
  areaId: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field encargadoId cannot be empty.' })
  @IsInt({ message: 'The field encargadoId must be a valid integer.' })
  encargadoId: number;

  @Field(() => Boolean)
  @IsOptional()
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;
}
