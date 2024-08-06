import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('running on 4000');
  await app.listen(4000);
  console.log('hi~');
}
bootstrap();
