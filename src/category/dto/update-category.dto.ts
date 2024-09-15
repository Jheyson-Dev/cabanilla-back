import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCategoryDto } from './create-category.dto';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
