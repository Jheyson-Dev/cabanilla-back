import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersRols {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  rolId: number;

  @Field(() => String)
  descripcion: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
