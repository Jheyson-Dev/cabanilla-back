import { Int, Resolver } from '@nestjs/graphql';
import { InventoryMovementService } from './inventory-movement.service';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { InventoryMovement } from './entities/inventory-movement.entity';
import { CreateInventoryMovementDto } from './dto/create-inventory-movement.dto';
import { UpdateInventoryMovementDto } from './dto/update-inventory-movement.dto';
@Resolver()
export class InventoryMovementResolver {
  constructor(
    private readonly inventoryMovementService: InventoryMovementService,
  ) {}

  @Query(() => [InventoryMovement])
  async getAllInventoryMovements(): Promise<InventoryMovement[]> {
    return this.inventoryMovementService.getAll();
  }

  @Query(() => InventoryMovement)
  async getInventoryMovement(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<InventoryMovement> {
    return this.inventoryMovementService.getById(id);
  }

  @Mutation(() => InventoryMovement)
  async createInventoryMovement(
    @Args('data', { type: () => CreateInventoryMovementDto })
    data: CreateInventoryMovementDto,
  ): Promise<InventoryMovement> {
    return this.inventoryMovementService.create(data);
  }

  @Mutation(() => InventoryMovement)
  async updateInventoryMovement(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateInventoryMovementDto })
    data: UpdateInventoryMovementDto,
  ): Promise<InventoryMovement> {
    return this.inventoryMovementService.update(id, data);
  }

  @Mutation(() => InventoryMovement)
  async removeInventoryMovement(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<String> {
    return this.inventoryMovementService.delete(id);
  }
}
