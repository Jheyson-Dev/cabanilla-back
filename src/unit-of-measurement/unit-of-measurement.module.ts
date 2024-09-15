import { Module } from '@nestjs/common';
import { UnitOfMeasurementResolver } from './unit-of-measurement.resolver';
import { UnitOfMeasurementService } from './unit-of-measurement.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UnitOfMeasurementResolver, UnitOfMeasurementService],
  imports: [PrismaModule],
})
export class UnitOfMeasurementModule {}
