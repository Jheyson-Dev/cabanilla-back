import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InventoryMovement } from './entities/inventory-movement.entity';
import { CreateInventoryMovementDto } from './dto/create-inventory-movement.dto';
import { UpdateInventoryMovementDto } from './dto/update-inventory-movement.dto';

@Injectable()
export class InventoryMovementService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<InventoryMovement[]> {
    return this.prisma.inventoryMovement.findMany();
  }

  async getById(id: number): Promise<InventoryMovement> {
    return this.prisma.inventoryMovement.findUnique({
      where: { id },
    });
  }

  async create(data: CreateInventoryMovementDto): Promise<InventoryMovement> {
    return this.prisma.inventoryMovement.create({
      data,
    });
  }

  async update(
    id: number,
    data: UpdateInventoryMovementDto,
  ): Promise<InventoryMovement> {
    return this.prisma.inventoryMovement.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<String> {
    return `No podemos eliminar un registro de InventoryMovement: ${id}`;
  }
}
