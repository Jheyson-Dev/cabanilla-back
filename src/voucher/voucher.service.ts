import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Voucher } from './entities/vouvher.entity';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';

@Injectable()
export class VoucherService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Voucher[]> {
    return this.prisma.voucher.findMany({
      include: {
        userRequest: true,
      },
    });
  }

  async getById(id: number): Promise<Voucher> {
    return this.prisma.voucher.findUnique({
      where: { id },
    });
  }

  async create(data: CreateVoucherDto): Promise<Voucher> {
    const { userRequestId } = data;
    return this.prisma.voucher.create({
      data: {
        userRequestId,
      },
    });
  }

  async update(id: number, data: UpdateVoucherDto): Promise<Voucher> {
    const { userRequestId, storeApproved, status } = data;
    return this.prisma.voucher.update({
      where: { id },
      data: {
        userRequestId,
        storeApproved,
        status,
      },
    });
  }

  async delete(id: number): Promise<Voucher> {
    return this.prisma.voucher.update({
      where: { id },
      data: {
        status: 'CANCELADO',
      },
    });
  }
}
