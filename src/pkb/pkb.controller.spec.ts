import { Test, TestingModule } from '@nestjs/testing';
import { PkbController } from './pkb.controller';

describe('PkbController', () => {
  let controller: PkbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkbController],
    }).compile();

    controller = module.get<PkbController>(PkbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
