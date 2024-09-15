import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        person: true,
      },
    });
  }

  async getById(id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: { id },
      include: {
        person: true,
      },
    });
  }

  async create(data: CreateUserDto): Promise<User> {
    const { username, password, status, areaId, personId } = data;
    return this.prisma.user.create({
      data: {
        username,
        password,
        status,
        areaId,
        personId,
      },
    });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const { username, password, status, areaId, personId } = data;
    return this.prisma.user.update({
      where: { id },
      data: {
        username,
        password,
        status,
        areaId,
        personId,
      },
    });
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
