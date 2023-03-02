import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as cookieParser from 'cookie-parser';

async function start() {
  const PORT = process.env.PORT;

  const app = await NestFactory.create(AppModule, {
    cors: { origin: true, credentials: true },
  });

  app.use(cookieParser());

  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

start();
