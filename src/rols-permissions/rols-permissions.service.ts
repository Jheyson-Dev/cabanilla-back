import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolsPermissions } from './entities/rols-permissions.entity';
import { CreateRolsPermissionsDto } from './dto/create-rols-permissions.dto';
import { UpdateRolsPermisssionsDto } from './dto/update-rols-permisions.dto';

@Injectable()
export class RolsPermissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<RolsPermissions[]> {
    return this.prisma.rolsPermissions.findMany();
  }

  async getById(id: number): Promise<RolsPermissions> {
    return this.prisma.rolsPermissions.findFirst({
      where: { id },
    });
  }

  async create(data: CreateRolsPermissionsDto): Promise<RolsPermissions> {
    const { permissionId, rolId, table } = data;
    return this.prisma.rolsPermissions.create({
      data: {
        permissionId,
        rolId,
        table,
      },
    });
  }

  // async udpate(
  //   rolId: number,
  //   permissionId: number,
  //   data: UpdateRolsPermisssionsDto,
  // ): Promise<RolsPermissions> {
  //   const { table } = data;
  //   return this.prisma.rolsPermissions.update({
  //     where: { rolId_permissionId: { rolId, permissionId } },
  //     data: { table },
  //   });
  // }

  // async delete(rolId: number, permissionId: number): Promise<RolsPermissions> {
  //   return this.prisma.rolsPermissions.delete({
  //     where: { rolId_permissionId: { rolId, permissionId } },
  //   });
  // }

  // FUNCIONALIDADES ADICIONALES

  async getAllPermissionByRolId(id: number): Promise<RolsPermissions[]> {
    return this.prisma.rolsPermissions.findMany({
      where: { rolId: id },
      include: {
        permission: true,
        rol: true,
      },
    });
  }
}
