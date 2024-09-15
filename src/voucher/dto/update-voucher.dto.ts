import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateVoucherDto } from './create-voucher.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateVoucherDto extends PartialType(CreateVoucherDto) {
  @Field(() => String)
  @IsOptional()
  @IsString({ message: 'The field status must be a valid string.' })
  status?: string;

  @Field(() => Boolean)
  @IsOptional()
  @IsBoolean({
    message: 'The field storeApproved must be either true or false.',
  })
  storeApproved?: boolean;
}
