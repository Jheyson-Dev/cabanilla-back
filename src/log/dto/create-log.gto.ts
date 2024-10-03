import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateLogDto {
  @Field(() => Int)
  @IsNotEmpty({ message: 'UserId is required' })
  @IsInt()
  userId: number;

  @Field(() => String)
  @IsNotEmpty({ message: 'Action is required' })
  @IsString()
  @MinLength(4, { message: 'Ation is too short' })
  @MaxLength(255, { message: 'Action is too long' })
  action: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'Date is required' })
  @IsDate()
  date?: Date;

  @Field(() => String)
  @IsString()
  details: string;
}
