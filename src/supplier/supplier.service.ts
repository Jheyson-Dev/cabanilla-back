import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Supplier[]> {
    return this.prisma.supplier.findMany();
  }

  async getById(id: number): Promise<Supplier> {
    return this.prisma.supplier.findUnique({
      where: { id },
    });
  }

  async create(data: CreateSupplierDto): Promise<Supplier> {
    const { name, phone, email, address, city, country } = data;
    return this.prisma.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        city,
        country,
      },
    });
  }

  async update(id: number, data: UpdateSupplierDto): Promise<Supplier> {
    const { name, phone, email, address, city, country, status } = data;
    return this.prisma.supplier.update({
      where: { id },
      data: {
        name,
        phone,
        email,
        address,
        city,
        country,
        status,
      },
    });
  }

  async delete(id: number): Promise<Supplier> {
    return this.prisma.supplier.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
