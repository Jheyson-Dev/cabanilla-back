import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolResolver } from './rol.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [RolService, RolResolver],
  imports: [PrismaModule],
})
export class RolModule {}
