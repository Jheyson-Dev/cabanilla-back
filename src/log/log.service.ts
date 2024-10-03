import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Log } from './entities/log.entity';
import { CreateLogDto } from './dto/create-log.gto';
import { UpdateLogDto } from './dto/update-log.dto';

@Injectable()
export class LogService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Log[]> {
    return this.prisma.log.findMany({
      include: {
        user: true,
      },
    });
  }

  async getById(id: number): Promise<Log> {
    return this.prisma.log.findUnique({ where: { id } });
  }

  async create(data: CreateLogDto): Promise<Log> {
    return this.prisma.log.create({
      data,
    });
  }

  async update(id: number, data: UpdateLogDto): Promise<Log> {
    const { userId, action, date, details } = data;
    return this.prisma.log.update({
      where: { id },
      data: {
        userId,
        action,
        details,
        date,
      },
    });
  }

  async delete(id: number): Promise<Log> {
    return this.prisma.log.delete({
      where: { id },
    });
  }
}
