import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateAreaDto } from './create-area.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateAreaDto extends PartialType(CreateAreaDto) {}
