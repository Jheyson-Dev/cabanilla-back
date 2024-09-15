import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PersonService, PersonResolver],
  imports: [PrismaModule],
})
export class PersonModule {}
