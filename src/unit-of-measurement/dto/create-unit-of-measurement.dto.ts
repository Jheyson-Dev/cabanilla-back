import { Field, Float, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

@InputType()
export class CreateUnitOfMeasurementDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a valid string.' })
  @Length(3, 50, {
    message: 'The field name must be between 3 and 50 characters long.',
  })
  name: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field symbol cannot be empty.' })
  @IsString({ message: 'The field symbol must be a valid string.' })
  @Length(3, 10, {
    message: 'The field symbol must be between 3 and 10 characters long.',
  })
  symbol: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field typeOfMeasure cannot be empty.' })
  @IsString({ message: 'The field typeOfMeasure must be a valid string.' })
  @Length(3, 20, {
    message:
      'The field typeOfMeasure must be between 3 and 20 characters long.',
  })
  typeOfMeasure: string;

  @Field(() => Float)
  @IsNotEmpty({ message: 'The field factorConversion cannot be empty.' })
  @IsNumber({}, { message: 'The field factorConversion must be a number.' })
  factorConversion: number;

  @Field(() => Boolean)
  @IsNotEmpty({ message: 'The field baseUnit cannot be empty.' })
  @IsBoolean({ message: 'The field baseUnit must be either true or false.' })
  baseUnit: boolean;

  @Field(() => Boolean)
  @IsOptional()
  @IsNotEmpty({ message: 'The field status cannot be empty.' })
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;

  @Field(() => String)
  @IsOptional()
  @IsNotEmpty({ message: 'The field notes cannot be empty.' })
  @IsString({ message: 'The field notes must be a valid string.' })
  @Length(4, 255, {
    message: 'The field notes must be between 3 and 20 characters long.',
  })
  notes?: string;
}
