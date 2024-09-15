import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AreaService } from './area.service';
import { Area } from './entities/area.entity';
import { CreateAreaDto } from './dto/create-area.dto';

@Resolver()
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Query(() => [Area])
  async getAllAreas(): Promise<Area[]> {
    return this.areaService.getAll();
  }

  @Query(() => Area)
  async getAreaById(id: number): Promise<Area> {
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
    @Args('id') id: number,
    @Args('data', { type: () => CreateAreaDto }) data: CreateAreaDto,
  ): Promise<Area> {
    return this.areaService.update(id, data);
  }

  @Mutation(() => Area)
  async deleteArea(@Args('id') id: number): Promise<Area> {
    return this.areaService.delete(id);
  }
}
