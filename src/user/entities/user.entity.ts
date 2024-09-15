// src/user/user.types.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Person } from 'src/person/entities/person.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => Int)
  areaId: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Int)
  personId: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Person, { nullable: true })
  person?: Person;
}
