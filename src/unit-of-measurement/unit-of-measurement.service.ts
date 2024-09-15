import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnitOfMeasurement } from './entities/unit-of-measurement.entity';
import { CreateUnitOfMeasurementDto } from './dto/create-unit-of-measurement.dto';
import { UpdateUnitOfMeasurementDto } from './dto/update-unit-of-measurement.dto';

@Injectable()
export class UnitOfMeasurementService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<UnitOfMeasurement[]> {
    return this.prisma.unitOfMeasurement.findMany();
  }

  async getById(id: number): Promise<UnitOfMeasurement> {
    return this.prisma.unitOfMeasurement.findUnique({
      where: { id },
    });
  }

  async create(data: CreateUnitOfMeasurementDto): Promise<UnitOfMeasurement> {
    const { name, baseUnit, symbol, typeOfMeasure, notes } = data;
    return this.prisma.unitOfMeasurement.create({
      data: {
        name,
        baseUnit,
        symbol,
        typeOfMeasure,
        notes,
      },
    });
  }

  async update(
    id: number,
    data: UpdateUnitOfMeasurementDto,
  ): Promise<UnitOfMeasurement> {
    const { name, baseUnit, factorConversion, notes, status, symbol } = data;
    return this.prisma.unitOfMeasurement.update({
      where: { id },
      data: {
        name,
        baseUnit,
        factorConversion,
        notes,
        status,
        symbol,
      },
    });
  }

  async delete(id: number): Promise<UnitOfMeasurement> {
    return this.prisma.unitOfMeasurement.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
