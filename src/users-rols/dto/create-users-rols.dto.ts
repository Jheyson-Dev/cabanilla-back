import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

@InputType()
export class CreateUsersRolsDto {
  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  rolId: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString({ message: 'The field descripcion must be a valid string.' })
  @Length(4, 255, {
    message: 'The field must be between 4 and 255 characters long.',
  })
  descripcion?: string;
}
