import { Test, TestingModule } from '@nestjs/testing';
import { EndorsementResolver } from './endorsement.resolver';

describe('EndorsementResolver', () => {
  let resolver: EndorsementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndorsementResolver],
    }).compile();

    resolver = module.get<EndorsementResolver>(EndorsementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
