import { Module } from '@nestjs/common';
import { InventoryMovementResolver } from './inventory-movement.resolver';
import { InventoryMovementService } from './inventory-movement.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [InventoryMovementResolver, InventoryMovementService],
  imports: [PrismaModule],
})
export class InventoryMovementModule {}
