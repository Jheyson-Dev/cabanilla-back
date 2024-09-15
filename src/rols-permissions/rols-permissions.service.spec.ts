import { Test, TestingModule } from '@nestjs/testing';
import { RolsPermissionsService } from './rols-permissions.service';

describe('RolsPermissionsService', () => {
  let service: RolsPermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolsPermissionsService],
    }).compile();

    service = module.get<RolsPermissionsService>(RolsPermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
