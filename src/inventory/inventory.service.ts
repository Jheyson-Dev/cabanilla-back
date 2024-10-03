import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Inventory } from './entities/inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Inventory[]> {
    const response = await this.prisma.inventory.findMany();
    console.log(response);
    return response;
  }

  async getById(id: number): Promise<Inventory> {
    return this.prisma.inventory.findUnique({
      where: { id },
    });
  }

  async create(data: CreateInventoryDto): Promise<Inventory> {
    return this.prisma.inventory.create({
      data,
    });
  }

  async update(id: number, data: UpdateInventoryDto): Promise<Inventory> {
    return this.prisma.inventory.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<String> {
    return 'No se puede eliminar un item de un invetario: ' + id;
  }
}
