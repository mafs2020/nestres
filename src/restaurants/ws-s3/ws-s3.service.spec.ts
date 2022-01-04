import { Test, TestingModule } from '@nestjs/testing';
import { WsS3Service } from './ws-s3.service';

describe('WsS3Service', () => {
  let service: WsS3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WsS3Service],
    }).compile();

    service = module.get<WsS3Service>(WsS3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
