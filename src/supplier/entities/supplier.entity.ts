import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Supplier {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  //   @Field(() => Product)
  //   products: Product[];
}
