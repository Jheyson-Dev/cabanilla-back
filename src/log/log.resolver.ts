import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LogService } from './log.service';
import { Log } from './entities/log.entity';
import { CreateLogDto } from './dto/create-log.gto';
import { UpdateLogDto } from './dto/update-log.dto';

@Resolver()
export class LogResolver {
  constructor(private readonly logService: LogService) {}

  @Query(() => [Log])
  async getAllLogs(): Promise<Log[]> {
    return this.logService.getAll();
  }

  @Query(() => Log)
  async getLogById(@Args('id', { type: () => Int }) id: number): Promise<Log> {
    return this.logService.getById(id);
  }

  @Mutation(() => Log)
  async createLog(
    @Args('data', { type: () => CreateLogDto })
    data: CreateLogDto,
  ): Promise<Log> {
    return this.logService.create(data);
  }

  @Mutation(() => Log)
  async updateLog(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateLogDto })
    data: UpdateLogDto,
  ): Promise<Log> {
    return this.logService.update(id, data);
  }

  @Mutation(() => Log)
  async deleteLog(@Args('id', { type: () => Int }) id: number): Promise<Log> {
    return this.logService.delete(id);
  }
}
