import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Rol } from './entities/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';

@Injectable()
export class RolService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Rol[]> {
    return this.prisma.rol.findMany();
  }

  async getById(id: number): Promise<Rol> {
    return this.prisma.rol.findUnique({
      where: { id },
    });
  }

  async create(data: CreateRolDto): Promise<Rol> {
    const { name } = data;
    return this.prisma.rol.create({ data: { name } });
  }

  async update(id: number, data: CreateRolDto): Promise<Rol> {
    const { name } = data;
    return this.prisma.rol.update({
      where: { id },
      data: { name },
    });
  }

  async delete(id: number): Promise<Rol> {
    return this.prisma.rol.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
