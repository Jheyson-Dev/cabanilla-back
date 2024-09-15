import { InputType, PartialType } from '@nestjs/graphql';
import { CreateInventoryMovementDto } from './create-inventory-movement.dto';

@InputType()
export class UpdateInventoryMovementDto extends PartialType(
  CreateInventoryMovementDto,
) {}
