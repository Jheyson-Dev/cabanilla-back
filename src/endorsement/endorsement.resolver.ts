import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EndorsementService } from './endorsement.service';
import { Endorsement } from './entities/endorsement.entity';
import { CreateEndorsementDto } from './dto/create-endorsement.dto';
import { UpdateEndorsementDto } from './dto/update-endorsement.dto';

@Resolver()
export class EndorsementResolver {
  constructor(private readonly endorsementService: EndorsementService) {}

  @Query(() => [Endorsement])
  async getEndorsements(): Promise<Endorsement[]> {
    return this.endorsementService.getAll();
  }

  @Query(() => Endorsement)
  async getEndorsement(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Endorsement> {
    return this.endorsementService.getById(id);
  }

  @Mutation(() => Endorsement)
  async createEndorsement(
    @Args('data', { type: () => CreateEndorsementDto })
    data: CreateEndorsementDto,
  ) {
    return this.endorsementService.create(data);
  }

  @Mutation(() => Endorsement)
  async updateEndorsement(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateEndorsementDto })
    data: UpdateEndorsementDto,
  ): Promise<Endorsement> {
    return this.endorsementService.update(id, data);
  }

  @Mutation(() => String)
  async deleteEndorsement(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<String> {
    return this.endorsementService.delete(id);
  }
}
