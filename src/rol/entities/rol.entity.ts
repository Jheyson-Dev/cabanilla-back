import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Rol {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Boolean)
  status: boolean;
}
