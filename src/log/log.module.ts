import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogResolver } from './log.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [LogService, LogResolver],
  imports: [PrismaModule],
})
export class LogModule {}
