import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VoucherService } from './voucher.service';
import { Voucher } from './entities/vouvher.entity';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';

@Resolver()
export class VoucherResolver {
  constructor(private readonly voucherService: VoucherService) {}

  @Query(() => [Voucher])
  async getAllVouchers(): Promise<Voucher[]> {
    return this.voucherService.getAll();
  }

  @Query(() => Voucher)
  async getVoucherById(
    @Args('id', { type: () => Int })
    id: number,
  ): Promise<Voucher> {
    return this.voucherService.getById(id);
  }

  @Mutation(() => Voucher)
  async createVoucher(
    @Args('data', { type: () => CreateVoucherDto })
    data: CreateVoucherDto,
  ): Promise<Voucher> {
    return this.voucherService.create(data);
  }

  @Mutation(() => Voucher)
  async updateVoucher(
    @Args('id', { type: () => Int })
    id: number,
    @Args('data', { type: () => UpdateVoucherDto })
    data: UpdateVoucherDto,
  ): Promise<Voucher> {
    return this.voucherService.update(id, data);
  }

  @Mutation(() => Voucher)
  async deleteVoucher(
    @Args('id', { type: () => Int })
    id: number,
  ): Promise<Voucher> {
    return this.voucherService.delete(id);
  }
}
