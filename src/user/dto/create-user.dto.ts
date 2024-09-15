import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsInt,
  IsString,
  Length,
  IsBoolean,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field username cannot be empty.' })
  @IsString({ message: 'The field username must be a valid string.' })
  @Length(4, 50, {
    message: 'The field password must be between 4 and 50 characters long.',
  })
  username: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field password cannot be empty.' })
  @IsString({ message: 'The field password must be a valid string.' })
  @Length(8, 50, {
    message: 'The field password must be between 8 and 50 characters long.',
  })
  // @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/, {
  //   message: 'Password too weak',
  // })
  password: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field areaId cannot be empty.' })
  @IsInt({ message: 'The field areaId must be a valid integer.' })
  areaId?: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field personId cannot be empty.' })
  @IsInt({ message: 'The field areaId must be a valid integer.' })
  personId: number;

  @Field(() => Boolean)
  @IsOptional()
  @IsBoolean({ message: 'The field status must be either true or false.' })
  status?: boolean;
}
