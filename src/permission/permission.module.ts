import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PermissionService, PermissionResolver],
  imports: [PrismaModule],
})
export class PermissionModule {}
