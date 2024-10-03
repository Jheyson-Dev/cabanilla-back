import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, length } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { Inventory } from 'src/inventory/entities/inventory.entity';
import { Store } from 'src/store/entities/store.entity';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  quantityAvailable: number;

  @Field(() => Int)
  categoryId: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Int)
  supplierId: number;

  @Field(() => Category, { nullable: true })
  category?: Category;

  @Field(() => [Inventory], { nullable: true })
  stores?: Inventory[];
}
