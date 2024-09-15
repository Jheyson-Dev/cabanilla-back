import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SupplierService } from './supplier.service';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Resolver()
export class SupplierResolver {
  constructor(private readonly supplierService: SupplierService) {}

  @Query(() => [Supplier])
  async getAllSuppliers(): Promise<Supplier[]> {
    return this.supplierService.getAll();
  }

  @Query(() => Supplier)
  async getSupplierById(
    @Args('id', { type: () => Int })
    id: number,
  ): Promise<Supplier> {
    return this.supplierService.getById(id);
  }

  @Mutation(() => Supplier)
  async createSupplier(
    @Args('data', { type: () => CreateSupplierDto }) data: CreateSupplierDto,
  ): Promise<Supplier> {
    return this.supplierService.create(data);
  }

  @Mutation(() => Supplier)
  async updateSupplier(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateSupplierDto }) data: UpdateSupplierDto,
  ): Promise<Supplier> {
    return this.supplierService.update(id, data);
  }

  @Mutation(() => Supplier)
  async deleteSupplier(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Supplier> {
    return this.supplierService.delete(id);
  }
}
