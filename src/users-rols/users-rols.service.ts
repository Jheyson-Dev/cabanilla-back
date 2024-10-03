import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRols } from './entities/users-rols.entity';
import { CreateUsersRolsDto } from './dto/create-users-rols.dto';
import { UpdateUsersRolsDto } from './dto/update-users-rols.dto';

@Injectable()
export class UsersRolsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<UsersRols[]> {
    return this.prisma.usersRols.findMany({
      include: {
        rol: {
          include: {
            RolsPermissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async getById(id: number): Promise<UsersRols> {
    return this.prisma.usersRols.findUnique({
      where: {
        id,
      },
      include: {
        rol: {
          include: {
            RolsPermissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async create(data: CreateUsersRolsDto): Promise<UsersRols> {
    return this.prisma.usersRols.create({
      data,
    });
  }

  async update(id: number, data: UpdateUsersRolsDto): Promise<UsersRols> {
    return this.prisma.usersRols.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<UsersRols> {
    return this.prisma.usersRols.delete({
      where: { id },
    });
  }
}
