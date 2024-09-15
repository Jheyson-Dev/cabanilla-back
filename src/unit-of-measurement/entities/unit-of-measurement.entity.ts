import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UnitOfMeasurement {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  symbol: string;

  @Field(() => String)
  typeOfMeasure: string;

  @Field(() => Float)
  factorConversion: number;

  @Field(() => Boolean)
  baseUnit: boolean;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => String)
  notes: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  //   @Field(() => Product)
  //   products: Product[];
}
