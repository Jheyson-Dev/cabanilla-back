import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PermissionService } from './permission.service';
import { Permission } from './entities/permission.entity';
import { CreatePermissionDto } from './dto/create-permission.dto';

@Resolver()
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => [Permission])
  async getAllPermissions(): Promise<Permission[]> {
    return this.permissionService.getAll();
  }

  @Query(() => Permission)
  async getPermissionById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Permission> {
    return this.permissionService.getById(id);
  }

  @Mutation(() => Permission)
  async createPermission(
    @Args('data', { type: () => CreatePermissionDto })
    data: CreatePermissionDto,
  ): Promise<Permission> {
    return this.permissionService.create(data);
  }

  @Mutation(() => Permission)
  async updatePermission(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => CreatePermissionDto })
    data: CreatePermissionDto,
  ): Promise<Permission> {
    return this.permissionService.update(id, data);
  }

  @Mutation(() => Permission)
  async deletePermission(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Permission> {
    return this.permissionService.delete(id);
  }
}
