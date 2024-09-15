import { Test, TestingModule } from '@nestjs/testing';
import { UnitOfMeasurementResolver } from './unit-of-measurement.resolver';

describe('UnitOfMeasurementResolver', () => {
  let resolver: UnitOfMeasurementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitOfMeasurementResolver],
    }).compile();

    resolver = module.get<UnitOfMeasurementResolver>(UnitOfMeasurementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
