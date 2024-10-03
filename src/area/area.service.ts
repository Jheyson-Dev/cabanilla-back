import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Area[]> {
    return this.prisma.area.findMany({
      include: {
        users: {
          include: {
            person: true,
            logs: true,
            roles: {
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
            },
          },
        },
      },
    });
  }

  async getById(id: number): Promise<Area> {
    return this.prisma.area.findUnique({
      where: { id },
      include: {
        users: {
          include: {
            person: true,
            logs: true,
            roles: {
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
            },
          },
        },
      },
    });
  }

  async create(data: CreateAreaDto): Promise<Area> {
    return await this.prisma.area.create({ data });
  }

  async update(id: number, data: UpdateAreaDto): Promise<Area> {
    return this.prisma.area.update({
      where: { id },
      data,
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
