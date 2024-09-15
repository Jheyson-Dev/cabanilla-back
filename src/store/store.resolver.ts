import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StoreService } from './store.service';
import { Store } from './entities/store.entity';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Resolver()
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => [Store])
  async getAllStores(): Promise<Store[]> {
    return this.storeService.getAll();
  }

  @Query(() => Store)
  async getStoreById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Store> {
    return this.storeService.getById(id);
  }

  @Mutation(() => Store)
  async createStore(
    @Args('data', { type: () => CreateStoreDto }) data: CreateStoreDto,
  ): Promise<Store> {
    return this.storeService.create(data);
  }

  @Mutation(() => Store)
  async updateStore(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateStoreDto }) data: UpdateStoreDto,
  ): Promise<Store> {
    return this.storeService.update(id, data);
  }

  @Mutation(() => Store)
  async deleteStore(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Store> {
    return this.storeService.delete(id);
  }
}
