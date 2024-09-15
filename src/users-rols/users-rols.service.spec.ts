import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolsService } from './users-rols.service';

describe('UsersRolsService', () => {
  let service: UsersRolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRolsService],
    }).compile();

    service = module.get<UsersRolsService>(UsersRolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
