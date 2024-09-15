import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUnitOfMeasurementDto } from './create-unit-of-measurement.dto';

@InputType()
export class UpdateUnitOfMeasurementDto extends PartialType(
  CreateUnitOfMeasurementDto,
) {}
