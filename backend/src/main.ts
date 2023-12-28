import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';

config();

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin:  '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe({
      transform: true,
  }));

  await app.listen(8000);
}

bootstrap();