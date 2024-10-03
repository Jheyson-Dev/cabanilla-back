import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Person, PersonsResult } from './entities/person.entity';
import { UpdatePersonDto } from './dto/update-person.dto';
import { CreatePersonDto } from './dto/create-person.dto';
import { UserService } from 'src/user/user.service';

// Librerias Externas
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PersonService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async getAll(status?: boolean): Promise<PersonsResult> {
    const count = await this.prisma.person.count({
      where: status !== undefined ? { status } : {},
    });

    const users = await this.prisma.person.findMany({
      where: status !== undefined ? { status } : {},
      include: {
        user: {
          include: {
            logs: true,
            roles: {
              include: {
                rol: {
                  include: {
                    RolsPermissions: {
                      include: {
                        permission: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    return { users, count };
  }
  async getById(id: number): Promise<Person> {
    return this.prisma.person.findUnique({
      where: { id },
      include: {
        user: {
          include: {
            logs: true,
            roles: {
              include: {
                rol: {
                  include: {
                    RolsPermissions: {
                      include: {
                        permission: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async create(data: CreatePersonDto): Promise<Person> {
    return this.prisma.person.create({
      data,
    });
  }
  async update(id: number, data: UpdatePersonDto): Promise<Person> {
    return this.prisma.person.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Person> {
    const person = await this.prisma.person.update({
      where: { id },
      data: {
        status: false,
      },
    });

    const user = await this.prisma.user.update({
      where: { personId: person.id },
      data: {
        status: false,
      },
    });
    return person;
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

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async createPersonAndUser(
    id: number,
    personData: CreatePersonDto,
  ): Promise<Person> {
    const password = `${personData.name}.${personData.lastname}`;
    const hashedPassword = await this.hashPassword(password);
    const person = await this.create(personData);
    const user = await this.userService.create({
      username: `${person.dni}`,
      password: hashedPassword,
      personId: person.id,
    });
    await this.prisma.usersRols.create({
      data: {
        userId: user.id,
        rolId: id,
      },
    });

    return person;
  }

  async updatePersonAndUser(
    id: number,
    id_table_rol: number,
    id_rol: number,
    data: UpdatePersonDto,
  ): Promise<Person> {
    const person = await this.update(id, data);
    const user = await this.prisma.user.update({
      where: { personId: person.id },
      data: { status: person.status },
    });

    await this.prisma.usersRols.update({
      where: { id: id_table_rol },
      data: {
        rolId: id_rol,
      },
    });
    return person;
  }

  async deletePersonAndUser(id: number): Promise<Person> {
    const person = await this.prisma.person.update({
      where: { id },
      data: {
        status: false,
      },
    });

    await this.prisma.user.update({
      where: { personId: person.id },
      data: {
        status: person.status,
      },
    });
    return person;
  }
}
