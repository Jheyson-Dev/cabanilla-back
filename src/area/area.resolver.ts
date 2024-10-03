import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AreaService } from './area.service';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Resolver()
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Query(() => [Area])
  async getAllAreas(): Promise<Area[]> {
    return this.areaService.getAll();
  }

  @Query(() => Area)
  async getAreaById(
    @Args('id', { type: () => Int })
    id: number,
  ): Promise<Area> {
    return this.areaService.getById(id);
  }

  @Mutation(() => Area)
  async createArea(
    @Args('data', { type: () => CreateAreaDto }) data: CreateAreaDto,
  ): Promise<Area> {
    return this.areaService.create(data);
  }

  @Mutation(() => Area)
  async updateArea(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateAreaDto }) data: UpdateAreaDto,
  ): Promise<Area> {
    return this.areaService.update(id, data);
  }

  @Mutation(() => Area)
  async deleteArea(@Args('id', { type: () => Int }) id: number): Promise<Area> {
    return this.areaService.delete(id);
  }
}
