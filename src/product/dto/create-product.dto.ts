import { Field, Float, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { isFloat32Array } from 'util/types';

@InputType()
export class CreateProductDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a valid string.' })
  @Length(3, 255, {
    message: 'The field name must be between 3 and 20 characters long.',
  })
  name: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field description cannot be empty.' })
  @IsString({ message: 'The field description must be a valid string.' })
  @Length(3, 255, {
    message: 'The field description must be between 3 and 20 characters long.',
  })
  description: string;

  @Field(() => Float)
  @IsNotEmpty({ message: 'The field price cannot be empty.' })
  @IsNumber({}, { message: 'The field price must be a number.' })
  price: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field quantityAvailable cannot be empty.' })
  @IsNumber({}, { message: 'The field quantityAvailable must be a number.' })
  quantityAvailable: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field categoryId cannot be empty.' })
  @IsNumber({}, { message: 'The field categoryId must be a number.' })
  categoryId: number;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field status cannot be empty.' })
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field supplierId cannot be empty.' })
  @IsNumber({}, { message: 'The field supplierId must be a number.' })
  supplierId: number;
}
