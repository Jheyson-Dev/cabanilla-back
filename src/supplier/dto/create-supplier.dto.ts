import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

@InputType()
export class CreateSupplierDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a valid string.' })
  @Length(3, 50, {
    message: 'The field name must be between 3 and 20 characters long.',
  })
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field address cannot be empty.' })
  @IsString({ message: 'The field address must be a valid string.' })
  // @Length(3, 50, {
  //   message: 'The field address must be between 3 and 20 characters long.',
  // })
  address?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field city cannot be empty.' })
  @IsString({ message: 'The field city must be a valid string.' })
  @Length(3, 50, {
    message: 'The field city must be between 3 and 20 characters long.',
  })
  city?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field country cannot be empty.' })
  @IsString({ message: 'The field country must be a valid string.' })
  // @Length(2, 50, {
  //   message: 'The field country must be between 3 and 20 characters long.',
  // })
  country?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field phone cannot be empty.' })
  @IsString({ message: 'The field phone must be a valid string.' })
  // @IsPhoneNumber('PE', {
  //   message: 'The field phone must be a valid phone number.',
  // })
  // @Length(8, 11, {
  //   message: 'The field phone must be between 8 and 11 characters long.',
  // })
  phone?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field email cannot be empty.' })
  @IsString({ message: 'The field email must be a valid string.' })
  // @Length(3, 50, {
  //   message: 'The field email must be between 3 and 20 characters long.',
  // })
  // @IsEmail({}, { message: 'The field email must be a valid email address.' })
  email?: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;
}
