import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Store {
  @Field(() => ID)
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
}
