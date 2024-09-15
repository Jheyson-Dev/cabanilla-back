import { Int, Resolver } from '@nestjs/graphql';
import { UnitOfMeasurementService } from './unit-of-measurement.service';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { UnitOfMeasurement } from './entities/unit-of-measurement.entity';
import { CreateUnitOfMeasurementDto } from './dto/create-unit-of-measurement.dto';
import { UpdateUnitOfMeasurementDto } from './dto/update-unit-of-measurement.dto';

@Resolver()
export class UnitOfMeasurementResolver {
  constructor(
    private readonly unitOfMeasurementService: UnitOfMeasurementService,
  ) {}

  @Query(() => [UnitOfMeasurement])
  async getAllUnitsOfMeasurement(): Promise<UnitOfMeasurement[]> {
    return this.unitOfMeasurementService.getAll();
  }

  @Query(() => UnitOfMeasurement)
  async getUnitOfMeasurement(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UnitOfMeasurement> {
    return this.unitOfMeasurementService.getById(id);
  }

  @Mutation(() => UnitOfMeasurement)
  async createUnitOfMeasurement(
    @Args('data', { type: () => CreateUnitOfMeasurementDto })
    data: CreateUnitOfMeasurementDto,
  ): Promise<UnitOfMeasurement> {
    return this.unitOfMeasurementService.create(data);
  }

  @Mutation(() => UnitOfMeasurement)
  async updateUnitOfMeasurement(
    @Args('id', { type: () => Int }) id: number,
    @Args('data')
    data: UpdateUnitOfMeasurementDto,
  ): Promise<UnitOfMeasurement> {
    return this.unitOfMeasurementService.update(id, data);
  }

  @Mutation(() => UnitOfMeasurement)
  async deleteUnitOfMeasurement(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UnitOfMeasurement> {
    return this.unitOfMeasurementService.delete(id);
  }
}
