import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  // @UseGuards(AuthGuard)
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Query(() => User)
  async getUserById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User> {
    return this.userService.getById(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('data', { type: () => CreateUserDto })
    data: CreateUserDto,
  ): Promise<User> {
    return this.userService.create(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateUserDto })
    data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, data);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.delete(id);
  }
}
