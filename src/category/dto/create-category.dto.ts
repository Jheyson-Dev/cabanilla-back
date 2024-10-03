import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

@InputType()
export class CreateCategoryDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a valid string.' })
  @Length(4, 255, {
    message: 'The field name must be between 4 and 255 characters long.',
  })
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field description cannot be empty.' })
  @IsString({ message: 'The field description must be a valid string.' })
  @Length(4, 255, {
    message: 'The field description must be between 4 and 255 characters long.',
  })
  description?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;
}
