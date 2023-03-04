import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import { AllExceptionsFilter } from '@filters/exceptions.filter';

async function start() {
  const PORT = process.env.PORT;

  const app = await NestFactory.create(AppModule, {
    cors: { origin: true, credentials: true },
  });

  app.use(cookieParser());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

start();
