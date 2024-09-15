import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Store } from './entities/store.entity';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Store[]> {
    return this.prisma.store.findMany();
  }

  async getById(id: number): Promise<Store> {
    return this.prisma.store.findUnique({
      where: { id },
    });
  }

  async create(data: CreateStoreDto): Promise<Store> {
    const { areaId, encargadoId, nombre, ubicacion } = data;
    return this.prisma.store.create({
      data: {
        nombre,
        areaId,
        ubicacion,
        encargadoId,
      },
    });
  }

  async update(id: number, data: UpdateStoreDto): Promise<Store> {
    const { areaId, encargadoId, nombre, ubicacion } = data;
    return this.prisma.store.update({
      where: { id },
      data: {
        areaId,
        encargadoId,
        nombre,
        ubicacion,
      },
    });
  }

  async delete(id: number): Promise<Store> {
    return this.prisma.store.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
