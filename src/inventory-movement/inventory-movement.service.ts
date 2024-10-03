import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InventoryMovement } from './entities/inventory-movement.entity';
import { CreateInventoryMovementDto } from './dto/create-inventory-movement.dto';
import { UpdateInventoryMovementDto } from './dto/update-inventory-movement.dto';
import { Inventory } from 'src/inventory/entities/inventory.entity';

@Injectable()
export class InventoryMovementService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<InventoryMovement[]> {
    return this.prisma.inventoryMovement.findMany({
      include: {
        product: true,
        destinationStore: true,
        originStore: true,
      },
    });
  }

  async getById(id: number): Promise<InventoryMovement> {
    return this.prisma.inventoryMovement.findUnique({
      where: { id },
    });
  }

  async create(data: CreateInventoryMovementDto): Promise<any> {
    const movement = await this.prisma.inventoryMovement.create({ data });

    const inventory = await this.prisma.inventory.findFirst({
      where: { productId: data.productId, storeId: data.destinationStoreId },
    });

    if (!inventory) {
      const response = await this.prisma.inventory.create({
        data: {
          productId: data.productId,
          storeId: data.destinationStoreId,
          cantidad: 0,
        },
      });
      if (data.movementType === 'IN') {
        return await this.aggregateInventory(response, data.quantity);
      }
      if (data.movementType === 'OUT') {
        return await this.decrementInventory(response, data.quantity);
      }
      if (data.movementType === 'TRANSFER') {
        return await this.transferInventory(movement);
      }
    } else {
      if (data.movementType === 'IN') {
        return await this.aggregateInventory(inventory, data.quantity);
      }

      if (data.movementType === 'OUT') {
        return await this.decrementInventory(inventory, data.quantity);
      }

      if (data.movementType === 'TRANSFER') {
        return await this.transferInventory(movement);
      }
    }

    return movement;
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

  // FUNCIONALIDAD EXTRA

  private async aggregateInventory(inventory: Inventory, quantity: number) {
    console.log(quantity);
    const product = await this.prisma.product.findUnique({
      where: { id: inventory.productId },
    });

    await this.prisma.product.update({
      where: { id: product.id },
      data: {
        quantityAvailable: {
          increment: quantity,
        },
      },
    });

    await this.prisma.inventory.update({
      where: { id: inventory.id },
      data: {
        cantidad: {
          increment: quantity,
        },
      },
    });
  }

  private async decrementInventory(inventory: Inventory, quantity: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: inventory.productId },
    });
    if (product.quantityAvailable < quantity) {
      throw new Error('No hay suficiente cantidad en el inventario');
    }
    await this.prisma.product.update({
      where: { id: product.id },
      data: {
        quantityAvailable: {
          decrement: quantity,
        },
      },
    });

    const decrement = await this.prisma.inventory.update({
      where: { id: inventory.id },
      data: {
        cantidad: {
          decrement: quantity,
        },
      },
    });
    console.log(decrement);
    return decrement;
  }

  private async transferInventory(inventory: InventoryMovement) {
    console.log(inventory);
    const inventoryAvailable = await this.prisma.inventory.findFirst({
      where: {
        productId: inventory.productId,
        storeId: inventory.originStoreId,
      },
    });

    if (inventoryAvailable.cantidad < inventory.quantity) {
      throw new Error('No hay suficiente cantidad en el inventario');
    }

    // Decrementar el inventario de la tienda de origen
    await this.prisma.inventory.update({
      where: { id: inventoryAvailable.id },
      data: {
        cantidad: {
          decrement: inventory.quantity,
        },
      },
    });

    // Incrementar el inventario de la tienda de destino
    const inventoryDestination = await this.prisma.inventory.findFirst({
      where: {
        productId: inventory.productId,
        storeId: inventory.destinationStoreId,
      },
    });

    if (!inventoryDestination) {
      await this.prisma.inventory.create({
        data: {
          productId: inventory.productId,
          storeId: inventory.destinationStoreId,
          cantidad: inventory.quantity,
        },
      });
    } else {
      await this.prisma.inventory.update({
        where: { id: inventoryDestination.id },
        data: {
          cantidad: {
            increment: inventory.quantity,
          },
        },
      });
    }

    return inventory;
  }
}
