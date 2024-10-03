import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateInventoryMovementDto {
  @Field(() => Int)
  @IsNotEmpty({ message: 'The field productId cannot be empty.' })
  @IsInt({ message: 'The field productId must be a valid integer.' })
  productId: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field originStoreId cannot be empty.' })
  @IsInt({ message: 'The field originStoreId must be a valid integer.' })
  originStoreId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNotEmpty({ message: 'The field destinationStoreId cannot be empty.' })
  @IsInt({ message: 'The field destinationStoreId must be a valid integer.' })
  destinationStoreId?: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field quantity cannot be empty.' })
  @IsInt({ message: 'The field quantity must be a valid integer.' })
  quantity: number;

  @Field()
  @IsNotEmpty({ message: 'The field movement cannot be empty.' })
  @IsString({ message: 'The field movement must be a valid string.' })
  movementType: string;
}
