import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Person } from './entities/person.entity';
import { UpdatePersonDto } from './dto/update-person.dto';
import { CreatePersonDto } from './dto/create-person.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PersonService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

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

  // OTRAS FUNCIONALIDADES:

  generateRandomPassword(length: number): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }

  async createPersonAndUser(
    personData: CreatePersonDto,
  ): Promise<{ person: Person; user: User }> {
    const password = this.generateRandomPassword(8);
    const person = await this.create(personData);
    const user = await this.userService.create({
      username: `${person.name}.${person.lastname}`,
      password,
      personId: person.id,
    });
    return { person, user };
  }
}
