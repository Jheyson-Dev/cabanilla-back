import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';

@Injectable()
export class AreaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Area[]> {
    return this.prisma.area.findMany({
      include: {
        users: true,
      },
    });
  }

  async getById(id: number): Promise<Area> {
    return this.prisma.area.findUnique({
      where: { id },
      include: {
        users: true,
      },
    });
  }

  async create(data: CreateAreaDto): Promise<Area> {
    const { name, responsableId } = data;
    return this.prisma.area.create({
      data: {
        name,
        responsableId,
      },
    });
  }

  async update(id: number, data: CreateAreaDto): Promise<Area> {
    const { name, responsableId, status } = data;
    return this.prisma.area.update({
      where: { id },
      data: {
        name,
        responsableId,
        status,
      },
    });
  }

  async delete(id: number): Promise<Area> {
    return this.prisma.area.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
