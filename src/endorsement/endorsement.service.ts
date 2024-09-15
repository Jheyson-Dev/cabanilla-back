import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Endorsement } from './entities/endorsement.entity';
import { CreateEndorsementDto } from './dto/create-endorsement.dto';
import { UpdateEndorsementDto } from './dto/update-endorsement.dto';

@Injectable()
export class EndorsementService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Endorsement[]> {
    return this.prisma.endorsement.findMany({
      include: {
        user: true,
        voucher: true,
      },
    });
  }
  async getById(id: number): Promise<Endorsement> {
    return this.prisma.endorsement.findUnique({
      where: { id },
      include: {
        user: true,
        voucher: true,
      },
    });
  }

  async create(data: CreateEndorsementDto): Promise<Endorsement> {
    const { orden_firma, userId, voucherId } = data;
    return this.prisma.endorsement.create({
      data: {
        userId,
        voucherId,
        orden_firma,
      },
    });
  }

  async update(id: number, data: UpdateEndorsementDto): Promise<Endorsement> {
    const { orden_firma, userId, voucherId } = data;
    return this.prisma.endorsement.update({
      where: { id },
      data: {
        orden_firma,
        userId,
        voucherId,
      },
    });
  }

  async delete(id: number): Promise<String> {
    return 'No se puede eliminar una firma';
  }
}
