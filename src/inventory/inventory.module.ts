import { Module } from '@nestjs/common';
import { InventoryResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [InventoryResolver, InventoryService],
  imports: [PrismaModule],
})
export class InventoryModule {}
