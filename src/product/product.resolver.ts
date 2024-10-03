import { Int, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Query(() => Product)
  async getProductById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Product> {
    const response = await this.productService.getById(id);
    console.log(JSON.stringify(response));
    return this.productService.getById(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('data', { type: () => CreateProductDto }) data: CreateProductDto,
  ): Promise<Product> {
    return this.productService.create(data);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, data);
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Product> {
    return this.productService.delete(id);
  }
}
