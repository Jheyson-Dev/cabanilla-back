import { Module } from '@nestjs/common';
import { RolsPermissionsService } from './rols-permissions.service';
import { RolsPermissionsResolver } from './rols-permissions.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [RolsPermissionsService, RolsPermissionsResolver],
  imports: [PrismaModule],
})
export class RolsPermissionsModule {}
