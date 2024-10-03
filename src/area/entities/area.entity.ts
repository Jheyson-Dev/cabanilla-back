import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Area {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Int, { nullable: true })
  responsableId?: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [User], { nullable: true })
  users?: User[];

  //   @Field(() => Store, { nullable: true })
  //   store?: Store;
}
