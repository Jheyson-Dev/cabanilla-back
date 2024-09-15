// create-permission.dto.ts
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

@InputType()
export class CreatePermissionDto {
  @Field(() => String)
  @IsString({ message: 'The fiel name must be valid string.' })
  @IsNotEmpty({ message: 'The field name cannot be empty.' })
  @Length(4, 50, {
    message: 'The field name must be between 4 and 50 characters long.',
  })
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field descripcion cannot be empty.' })
  @IsString({ message: 'The fiel descripcion must be valid string.' })
  @Length(4, 255, {
    message: 'The field descripcion must be between 4 and 255 characters long.',
  })
  descripcion?: string;
}
