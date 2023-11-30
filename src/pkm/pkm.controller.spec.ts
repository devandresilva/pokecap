import { Test, TestingModule } from '@nestjs/testing';
import { PkmController } from './pkm.controller';

describe('PkmController', () => {
  let controller: PkmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkmController],
    }).compile();

    controller = module.get<PkmController>(PkmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
