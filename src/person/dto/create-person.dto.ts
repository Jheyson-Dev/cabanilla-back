import {
  IsString,
  IsEmail,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  Length,
  IsPhoneNumber,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePersonDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a valid string.' })
  @Length(4, 50, {
    message: 'The field name must be between 4 and 50 characters long.',
  })
  name: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field lastname cannot be empty.' })
  @IsString({ message: 'The field lastname must be a valid string.' })
  @Length(4, 50, {
    message: 'The field lastname must be between 4 and 50 characters long.',
  })
  lastname: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field email cannot be empty.' })
  @IsEmail({}, { message: 'The field email must be a valid email address.' })
  @Length(4, 50, {
    message: 'The field email must be between 4 and 50 characters long.',
  })
  email: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field phone cannot be empty.' })
  @IsString({ message: 'The field phone must be a valid string.' })
  @IsPhoneNumber('PE', {
    message: 'The field phone must be a valid phone number.',
  })
  @Length(8, 11, {
    message: 'The field phone must be between 8 and 11 characters long.',
  })
  phone: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'Status is required' })
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;
}
