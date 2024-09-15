import { ID, ObjectType } from '@nestjs/graphql';
import { Field, Int } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Store } from 'src/store/entities/store.entity';

@ObjectType()
export class Inventory {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  cantidad: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  storeId: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Product, { nullable: true })
  product?: Product[];

  @Field(() => Store, { nullable: true })
  store?: Store[];
}
