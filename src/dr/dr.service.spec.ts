import { Test, TestingModule } from '@nestjs/testing';
import { DrService } from './dr.service';

describe('DrService', () => {
  let service: DrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrService],
    }).compile();

    service = module.get<DrService>(DrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
