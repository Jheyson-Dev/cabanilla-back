import { Test, TestingModule } from '@nestjs/testing';
import { RolResolver } from './rol.resolver';

describe('RolResolver', () => {
  let resolver: RolResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolResolver],
    }).compile();

    resolver = module.get<RolResolver>(RolResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
