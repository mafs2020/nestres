import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// aplicacion para express
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
