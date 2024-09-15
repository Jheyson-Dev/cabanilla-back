import { InputType, Field, Int, ID, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateInventoryDto } from './create-inventory.dto';

@InputType()
export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {
  // Campos Obligatorios

  @Field(() => Int)
  @IsInt({ message: 'The field productId must be a valid number.' })
  @IsNotEmpty({ message: 'The field productId cannot be empty.' })
  productId: number;

  @Field(() => Int)
  @IsInt({ message: 'The field storeId must be a valid number.' })
  @IsNotEmpty({ message: 'The field storeId cannot be empty.' })
  storeId: number;
}
