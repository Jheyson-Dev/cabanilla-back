import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Person } from './entities/person.entity';
import { PersonService } from './person.service';
import { type } from 'os';
import { CreatePersonDto } from './dto/create-person.dto';

@Resolver((of) => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query(() => [Person])
  async getAllPersons(): Promise<Person[]> {
    return this.personService.getAll();
  }

  @Query(() => Person)
  async getPersonById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    return this.personService.getById(id);
  }

  @Mutation(() => Person)
  async createPeson(
    @Args('data', { type: () => CreatePersonDto })
    data: CreatePersonDto,
  ): Promise<Person> {
    return this.personService.create(data);
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => CreatePersonDto })
    data: CreatePersonDto,
  ): Promise<Person> {
    return this.personService.update(id, data);
  }

  @Mutation(() => Person)
  async deletePerson(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    return this.personService.delete(id);
  }
}
