import { Module } from '@nestjs/common';
import { UsersRolsService } from './users-rols.service';
import { UsersRolsResolver } from './users-rols.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UsersRolsService, UsersRolsResolver],
  imports: [PrismaModule],
})
export class UsersRolsModule {}
