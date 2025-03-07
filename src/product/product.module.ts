import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ProductResolver, ProductService],
  imports: [PrismaModule],
})
export class ProductModule {}
