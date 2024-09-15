import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity'; // Asegúrate de tener el modelo User definido

@ObjectType()
export class Person {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  status: boolean;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field()
  createdAt: Date;

  @Field()
  updateAt: Date;
}
