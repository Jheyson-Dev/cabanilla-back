import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaResolver } from './area.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AreaService, AreaResolver],
  imports: [PrismaModule],
})
export class AreaModule {}
