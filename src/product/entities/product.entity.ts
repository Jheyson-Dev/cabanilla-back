import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, length } from 'class-validator';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;

  @Field(() => Int)
  quantityAvailable: number;

  @Field(() => Int)
  categoryId: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Int)
  supplierId: number;

  @Field(() => Int)
  unitOfMeasurementId: number;
}
