import { Test, TestingModule } from '@nestjs/testing';
import { RolsPermissionsResolver } from './rols-permissions.resolver';

describe('RolsPermissionsResolver', () => {
  let resolver: RolsPermissionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolsPermissionsResolver],
    }).compile();

    resolver = module.get<RolsPermissionsResolver>(RolsPermissionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
