import { Test, TestingModule } from '@nestjs/testing';
import { UsersRolsResolver } from './users-rols.resolver';

describe('UsersRolsResolver', () => {
  let resolver: UsersRolsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRolsResolver],
    }).compile();

    resolver = module.get<UsersRolsResolver>(UsersRolsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
