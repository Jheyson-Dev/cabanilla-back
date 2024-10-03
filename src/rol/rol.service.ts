import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Rol } from './entities/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Rol[]> {
    return this.prisma.rol.findMany({
      include: {
        RolsPermissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async getById(id: number): Promise<Rol> {
    return await this.prisma.rol.findUnique({
      where: { id },
      include: {
        RolsPermissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async create(data: CreateRolDto): Promise<Rol> {
    const { name } = data;
    return this.prisma.rol.create({ data: { name } });
  }

  async update(id: number, data: UpdateRolDto): Promise<Rol> {
    data;
    return this.prisma.rol.update({
      where: { id },
      data,
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
