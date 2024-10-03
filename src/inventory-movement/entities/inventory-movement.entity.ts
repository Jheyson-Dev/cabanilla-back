import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Store } from 'src/store/entities/store.entity';

@ObjectType()
export class InventoryMovement {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int, { nullable: true })
  originStoreId?: number;

  @Field(() => Int, { nullable: true })
  destinationStoreId?: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => String)
  movementType: string;

  @Field(() => Date)
  movementDate: Date;

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Store, { nullable: true })
  originStore?: Store;

  @Field(() => Store, { nullable: true })
  destinationStore?: Store;
}
