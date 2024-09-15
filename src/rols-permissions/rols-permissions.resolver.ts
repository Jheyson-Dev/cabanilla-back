import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolsPermissionsService } from './rols-permissions.service';
import { RolsPermissions } from './entities/rols-permissions.entity';
import { CreateRolsPermissionsDto } from './dto/create-rols-permissions.dto';

@Resolver()
export class RolsPermissionsResolver {
  constructor(
    private readonly rolsPermissionsService: RolsPermissionsService,
  ) {}

  @Query(() => [RolsPermissions])
  async getAllRolsPermissions(): Promise<RolsPermissions[]> {
    return this.rolsPermissionsService.getAll();
  }

  @Query(() => RolsPermissions)
  async getRolsPermissionsById(
    @Args('rolId') rolId: number,
    @Args('permissionId') permissionId: number,
  ): Promise<RolsPermissions> {
    return this.rolsPermissionsService.getById(rolId, permissionId);
  }

  @Mutation(() => RolsPermissions)
  async createRolsPermissions(
    @Args('data')
    data: CreateRolsPermissionsDto,
  ): Promise<RolsPermissions> {
    return this.rolsPermissionsService.create(data);
  }
}
