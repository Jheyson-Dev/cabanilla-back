import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Log {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String)
  action: string;

  @Field(() => Date)
  date: Date;

  @Field(() => String)
  details: string;

  @Field(() => User, { nullable: true })
  user?: User;
}
