import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateAreaDto } from './create-area.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateAreaDto extends PartialType(CreateAreaDto) {
  @Field(() => Int)
  @IsNotEmpty({ message: 'The fiel responsableId must be a valid string.' })
  @IsInt({ message: 'The field responsableId must be a valid number.' })
  responsableID: number;
}
