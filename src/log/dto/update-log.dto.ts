import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateLogDto } from './create-log.gto';
import { IsInt } from 'class-validator';

@InputType()
export class UpdateLogDto extends PartialType(CreateLogDto) {
  // Campos obligatorios
  @Field(() => Int)
  @IsInt()
  userId: number;
}
