import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersRols } from './entities/users-rols.entity';
import { UsersRolsService } from './users-rols.service';
import { CreateUsersRolsDto } from './dto/create-users-rols.dto';
import { UpdateUsersRolsDto } from './dto/update-users-rols.dto';

@Resolver()
export class UsersRolsResolver {
  constructor(private readonly usersRolsService: UsersRolsService) {}

  @Query(() => [UsersRols])
  async getAllUsersRols(): Promise<UsersRols[]> {
    return this.usersRolsService.getAll();
  }

  @Query(() => UsersRols)
  async getUsersRolById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UsersRols> {
    return this.usersRolsService.getById(id);
  }

  @Mutation(() => UsersRols)
  async createUsersRols(
    @Args('data', { type: () => CreateUsersRolsDto }) data: CreateUsersRolsDto,
  ): Promise<UsersRols> {
    return this.usersRolsService.create(data);
  }

  @Mutation(() => UsersRols)
  async updateUsersRols(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateUsersRolsDto }) data: UpdateUsersRolsDto,
  ): Promise<UsersRols> {
    return this.usersRolsService.update(id, data);
  }

  @Mutation(() => UsersRols)
  async deleteUsersRols(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<UsersRols> {
    return this.usersRolsService.delete(id);
  }
}
