import { Test, TestingModule } from '@nestjs/testing';
import { DrController } from './dr.controller';
import { DrService } from './dr.service';

describe('DrController', () => {
  let controller: DrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrController],
      providers: [DrService],
    }).compile();

    controller = module.get<DrController>(DrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
