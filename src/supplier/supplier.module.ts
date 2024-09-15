import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierResolver } from './supplier.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [SupplierService, SupplierResolver],
  imports: [PrismaModule],
})
export class SupplierModule {}
