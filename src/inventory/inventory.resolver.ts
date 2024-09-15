import { Int, Resolver } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { Inventory } from './entities/inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Resolver()
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Query(() => [Inventory])
  async getAllInventories(): Promise<Inventory[]> {
    return this.inventoryService.getAll();
  }

  @Query(() => Inventory)
  async getInventory(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Inventory> {
    return this.inventoryService.getById(id);
  }

  @Mutation(() => Inventory)
  async createInventory(
    @Args('data', { type: () => CreateInventoryDto }) data: CreateInventoryDto,
  ): Promise<Inventory> {
    return this.inventoryService.create(data);
  }

  @Mutation(() => Inventory)
  async updateInventory(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateInventoryDto }) data: UpdateInventoryDto,
  ): Promise<Inventory> {
    return this.inventoryService.update(id, data);
  }

  @Mutation(() => Inventory)
  async deleteInventory(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<String> {
    return this.inventoryService.delete(id);
  }
}
