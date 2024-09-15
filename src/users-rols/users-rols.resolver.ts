import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersRols } from './entities/users-rols.entity';
import { UsersRolsService } from './users-rols.service';
import { CreateUsersRolsDto } from './dto/create-users-rols.dto';

@Resolver()
export class UsersRolsResolver {
  constructor(private readonly usersRolsService: UsersRolsService) {}

  @Query(() => [UsersRols])
  async getAllUsersRols(): Promise<UsersRols[]> {
    return this.usersRolsService.getAll();
  }

  @Query(() => UsersRols)
  async getUsersRolById(
    @Args('rolId', { type: () => Int }) rolId: number,
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<UsersRols> {
    return this.usersRolsService.getById(rolId, userId);
  }

  @Mutation(() => UsersRols)
  async createUsersRols(
    @Args('data', { type: () => CreateUsersRolsDto }) data: CreateUsersRolsDto,
  ): Promise<UsersRols> {
    return this.usersRolsService.create(data);
  }

  @Mutation(() => UsersRols)
  async deleteUsersRols(
    @Args('rolId', { type: () => Int }) rolId: number,
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<UsersRols> {
    return this.usersRolsService.delete(rolId, userId);
  }
}
