import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Voucher {
  @Field(() => ID)
  id: number;

  @Field(() => Date)
  dateRequest: Date;

  @Field(() => Int)
  userRequestId: number;

  @Field(() => String)
  status: string;

  @Field(() => Boolean)
  storeApproved: boolean;

  @Field(() => User, { nullable: true })
  userRequest?: User;

  //   @Field(() => User, { nullable: true })
  //   endorsement?: User;
}
