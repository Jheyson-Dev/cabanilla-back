import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }

  async getById(id: number): Promise<Permission> {
    return this.prisma.permission.findUnique({
      where: { id },
    });
  }

  async create(data: CreatePermissionDto): Promise<Permission> {
    const { name } = data;
    return this.prisma.permission.create({
      data: {
        name,
      },
    });
  }

  async update(id: number, data: UpdatePermissionDto): Promise<Permission> {
    const { name } = data;
    return this.prisma.permission.update({
      where: { id },
      data: {
        name,
      },
    });
  }

  async delete(id: number): Promise<Permission> {
    return this.prisma.permission.delete({
      where: { id },
    });
  }
}
