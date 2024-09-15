import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateEndorsementDto {
  @Field(() => Int)
  @IsNotEmpty({ message: 'The field voucherId cannot be empty.' })
  @IsInt({ message: 'The field voucherId must be a valid integer.' })
  voucherId: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field userId cannot be empty.' })
  @IsInt({ message: 'The field userId must be a valid integer.' })
  userId: number;

  @Field(() => Int)
  @IsNotEmpty({ message: 'The field orden_firma cannot be empty.' })
  @IsInt({ message: 'The field orden_firma must be a valid integer.' })
  orden_firma: number;
}
