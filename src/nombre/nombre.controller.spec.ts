import { Test, TestingModule } from '@nestjs/testing';
import { NombreController } from './nombre.controller';
import { NombreService } from './nombre.service';

describe('NombreController', () => {
  let controller: NombreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NombreController],
      providers: [NombreService],
    }).compile();

    controller = module.get<NombreController>(NombreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
