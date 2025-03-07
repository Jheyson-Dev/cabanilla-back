import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [PersonService, PersonResolver],
  imports: [PrismaModule, UserModule, ConfigModule],
})
export class PersonModule {}
