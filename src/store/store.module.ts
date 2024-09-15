import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [StoreService, StoreResolver],
  imports: [PrismaModule],
})
export class StoreModule {}
