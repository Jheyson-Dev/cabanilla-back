import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolService } from './rol.service';
import { Rol } from './entities/rol.entity';
import { CreateRolDto } from './dto/create-rol.dto';

@Resolver()
export class RolResolver {
  constructor(private readonly rolService: RolService) {}

  @Query(() => [Rol])
  async getAllRols(): Promise<Rol[]> {
    return this.rolService.getAll();
  }

  @Query(() => Rol)
  async getRolById(@Args('id', { type: () => Int }) id: number): Promise<Rol> {
    return this.rolService.getById(id);
  }

  @Mutation(() => Rol)
  async createRol(@Args('data') data: CreateRolDto) {
    return this.rolService.create(data);
  }

  @Mutation(() => Rol)
  async updateRol(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: CreateRolDto,
  ) {
    return this.rolService.update(id, data);
  }

  @Mutation(() => Rol)
  async deleteRol(@Args('id', { type: () => Int }) id: number) {
    return this.rolService.delete(id);
  }
}
