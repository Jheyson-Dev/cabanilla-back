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
export class CreateAreaDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a string' })
  @Length(4, 255, {
    message: 'The field name must be between 4 and 255 characters long.',
  })
  name: string;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The fiel responsableId must be a valid string.' })
  @IsInt({ message: 'The field responsableId must be a valid number.' })
  responsableId: number;

  @Field(() => Boolean)
  @IsOptional()
  @IsNotEmpty({ message: 'The field status cannot be empty.' })
  @IsBoolean({ message: 'The field status must be a boolean.' })
  status?: boolean;
}
