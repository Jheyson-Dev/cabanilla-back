import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRols } from './entities/users-rols.entity';
import { CreateUsersRolsDto } from './dto/create-users-rols.dto';

@Injectable()
export class UsersRolsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<UsersRols[]> {
    return this.prisma.usersRols.findMany();
  }

  async getById(rolId: number, userId: number): Promise<UsersRols> {
    return this.prisma.usersRols.findUnique({
      where: { userId_rolId: { rolId, userId } },
    });
  }

  async create(data: CreateUsersRolsDto): Promise<UsersRols> {
    const { rolId, userId } = data;
    return this.prisma.usersRols.create({
      data: {
        rolId,
        userId,
      },
    });
  }

  async update(rolId: number, userId: number): Promise<UsersRols> {
    return this.prisma.usersRols.update({
      where: { userId_rolId: { rolId, userId } },
      data: {
        rolId,
        userId,
      },
    });
  }

  async delete(rolId: number, userId: number): Promise<UsersRols> {
    return this.prisma.usersRols.delete({
      where: { userId_rolId: { rolId, userId } },
    });
  }
}
