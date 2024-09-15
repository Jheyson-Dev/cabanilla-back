import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateVoucherDto {
  @Field(() => Int)
  @IsNotEmpty({ message: '' })
  @IsInt({ message: '' })
  userRequestId: number;
}
