import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateInventoryDto {
  @Field(() => Int)
  @IsInt({ message: 'The field cantidad must be a valid number.' })
  @IsNotEmpty({ message: 'The field cantidad cannot be empty.' })
  cantidad: number;

  @Field(() => Int)
  @IsInt({ message: 'The field productId must be a valid number.' })
  @IsNotEmpty({ message: 'The field productId cannot be empty.' })
  productId: number;

  @Field(() => Int)
  @IsInt({ message: 'The field storeId must be a valid number.' })
  @IsNotEmpty({ message: 'The field storeId cannot be empty.' })
  storeId: number;
}
