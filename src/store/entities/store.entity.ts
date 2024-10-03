import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Inventory } from 'src/inventory/entities/inventory.entity';
import { Product } from 'src/product/entities/product.entity';

@ObjectType()
export class Store {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  ubicacion: string;

  @Field(() => Int)
  areaId: number;

  @Field(() => Int)
  encargadoId: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [Inventory], { nullable: true })
  products?: Inventory[];
}
