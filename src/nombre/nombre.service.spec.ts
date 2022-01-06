import { Test, TestingModule } from '@nestjs/testing';
import { NombreService } from './nombre.service';

describe('NombreService', () => {
  let service: NombreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NombreService],
    }).compile();

    service = module.get<NombreService>(NombreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
