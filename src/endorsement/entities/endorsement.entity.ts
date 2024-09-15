import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Voucher } from 'src/voucher/entities/vouvher.entity';

@ObjectType()
export class Endorsement {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  voucherId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Date)
  dateEndorsement: Date;

  @Field(() => Int)
  orden_firma: number;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Voucher, { nullable: true })
  voucher?: Voucher;
}
