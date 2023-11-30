import { Test, TestingModule } from '@nestjs/testing';
import { PkbService } from './pkb.service';

describe('PkbService', () => {
  let service: PkbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkbService],
    }).compile();

    service = module.get<PkbService>(PkbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
