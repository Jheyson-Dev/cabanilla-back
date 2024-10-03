import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Product[]> {
    const response = await this.prisma.product.findMany({
      include: {
        category: true,
        stores: true,
      },
    });
    return response;
  }

  async getById(id: number): Promise<Product> {
    const response = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        stores: {
          include: {
            store: true,
            product: true,
          },
        },
      },
    });
    // console.log(JSON.stringify(response));

    return response;
  }

  async create(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async update(id: number, data: UpdateProductDto): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
