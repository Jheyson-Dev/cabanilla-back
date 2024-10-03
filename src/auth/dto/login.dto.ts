// login.dto.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field username cannot be empty.' })
  @IsString({ message: 'The field username must be a valid string.' })
  username: string;

  @Field(() => String)
  @IsNotEmpty({ message: 'The field username cannot be empty.' })
  @IsString({ message: 'The field username must be a valid string.' })
  password: string;
}
