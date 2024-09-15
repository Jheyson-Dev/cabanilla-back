import { Field, InputType } from '@nestjs/graphql';

import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateRolDto {
  @Field(() => String)
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @IsString({ message: 'The field name must be a valid string.' })
  @Length(3, 50, {
    message: 'The field name must be between 3 and 50 characters long.',
  })
  name: string;
}
