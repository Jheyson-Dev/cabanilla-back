import { Int, Resolver } from '@nestjs/graphql';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.getAll();
  }

  @Query(() => Category)
  async getCategoryById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Category> {
    return this.categoryService.getById(id);
  }

  @Mutation(() => Category)
  async createCategory(
    @Args('createCategoryInput', { type: () => CreateCategoryDto })
    data: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.create(data);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateCategoryDto })
    data: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(id, data);
  }

  @Mutation(() => Category)
  async deleteCategory(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Category> {
    return this.categoryService.delete(id);
  }
}
