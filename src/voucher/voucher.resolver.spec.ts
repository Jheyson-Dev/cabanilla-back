import { Test, TestingModule } from '@nestjs/testing';
import { VoucherResolver } from './voucher.resolver';

describe('VoucherResolver', () => {
  let resolver: VoucherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoucherResolver],
    }).compile();

    resolver = module.get<VoucherResolver>(VoucherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
