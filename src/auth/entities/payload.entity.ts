// src/user/user.payload.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { UsersRols } from 'src/users-rols/entities/users-rols.entity';

@ObjectType()
export class UserPayload {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => [UsersRols], { nullable: true })
  rol?: string;

  @Field(() => String, { nullable: true })
  exp?: string;

  @Field(() => Int, { nullable: true })
  timestamp?: number;
}
