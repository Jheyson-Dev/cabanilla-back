import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Person, PersonsResult } from './entities/person.entity';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Resolver((of) => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query(() => PersonsResult)
  async getAllPersons(
    @Args('status', { nullable: true }) status?: boolean,
  ): Promise<PersonsResult> {
    return this.personService.getAll(status);
  }

  @Query(() => Person)
  async getPersonById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    return this.personService.getById(id);
  }

  @Mutation(() => Person)
  async createPerson(
    @Args('data', { type: () => CreatePersonDto })
    data: CreatePersonDto,
  ): Promise<Person> {
    return this.personService.create(data);
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdatePersonDto })
    data: UpdatePersonDto,
  ): Promise<Person> {
    return this.personService.update(id, data);
  }

  @Mutation(() => Person)
  async deletePerson(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    return this.personService.delete(id);
  }

  @Mutation(() => Person)
  async createPersonAndUser(
    @Args('data', { type: () => CreatePersonDto }) data: CreatePersonDto,
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    // Implementation goes here
    return this.personService.createPersonAndUser(id, data);
  }

  @Mutation(() => Person)
  async updatePersonAndUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('id_table_rol', { type: () => Int }) id_table_rol: number,
    @Args('id_rol', { type: () => Int }) id_rol: number,
    @Args('data', { type: () => UpdatePersonDto }) data: UpdatePersonDto,
  ): Promise<Person> {
    // Implementation goes here
    return this.personService.updatePersonAndUser(
      id,
      id_table_rol,
      id_rol,
      data,
    );
  }

  @Mutation(() => Person)
  async deletePersonAndUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Person> {
    // Implementation goes here
    return this.personService.deletePersonAndUser(id);
  }
}
