import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { VoucherResolver } from './voucher.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [VoucherService, VoucherResolver],
  imports: [PrismaModule],
})
export class VoucherModule {}
