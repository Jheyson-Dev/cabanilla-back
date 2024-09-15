import { Module } from '@nestjs/common';
import { EndorsementService } from './endorsement.service';
import { EndorsementResolver } from './endorsement.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [EndorsementService, EndorsementResolver],
  imports: [PrismaModule],
})
export class EndorsementModule {}
