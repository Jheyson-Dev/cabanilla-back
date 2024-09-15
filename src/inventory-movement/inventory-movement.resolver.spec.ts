import { Test, TestingModule } from '@nestjs/testing';
import { InventoryMovementResolver } from './inventory-movement.resolver';

describe('InventoryMovementResolver', () => {
  let resolver: InventoryMovementResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryMovementResolver],
    }).compile();

    resolver = module.get<InventoryMovementResolver>(InventoryMovementResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
