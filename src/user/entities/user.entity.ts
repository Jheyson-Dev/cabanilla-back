// src/user/user.types.ts
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Log } from 'src/log/entities/log.entity';
import { Person } from 'src/person/entities/person.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { UsersRols } from 'src/users-rols/entities/users-rols.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => Int)
  areaId?: number;

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

  @Field(() => [UsersRols], { nullable: true })
  roles?: UsersRols[];

  @Field(() => [Log], { nullable: true })
  logs?: Log[];
}
