import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Category[]> {
    const response = await this.prisma.category.findMany({
      include: {
        product: true,
      },
    });

    return this.prisma.category.findMany({
      include: {
        product: true,
      },
    });
  }

  async getById(id: number): Promise<Category> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async create(data: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  async update(id: number, data: UpdateCategoryDto): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }
  async delete(id: number): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
