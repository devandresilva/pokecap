import { Test, TestingModule } from '@nestjs/testing';
import { PkmService } from './pkm.service';

describe('PkmService', () => {
  let service: PkmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PkmService],
    }).compile();

    service = module.get<PkmService>(PkmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
