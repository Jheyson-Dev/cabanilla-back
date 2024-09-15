import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Person } from './entities/person.entity';
import { UpdatePersonDto } from './dto/update-person.dto';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<Person[]> {
    return this.prisma.person.findMany({
      include: {
        user: true,
      },
    });
  }
  async getById(id: number): Promise<Person> {
    return this.prisma.person.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async create(data: CreatePersonDto): Promise<Person> {
    const { name, lastname, email, phone, status } = data;

    return this.prisma.person.create({
      data: {
        name,
        lastname,
        email,
        phone,
        status,
      },
    });
  }
  async update(id: number, data: UpdatePersonDto): Promise<Person> {
    const { name, email, lastname, phone, status } = data;
    return this.prisma.person.update({
      where: { id },
      data: {
        name,
        email,
        lastname,
        phone,
        status,
      },
    });
  }

  async delete(id: number): Promise<Person> {
    return this.prisma.person.delete({
      where: { id },
    });
  }
}
