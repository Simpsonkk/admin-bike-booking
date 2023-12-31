import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = new ConfigService();

  app.enableCors({
    origin: configService.get('CORS_ORIGIN'),
  });

  app.useGlobalPipes(new ValidationPipe());

  const globalPrefix = configService.get('API_ORIGIN_URL');
  const port = configService.get('APP_PORT');

  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Bike-booking')
    .setDescription('The Bike-booking API description')
    .setVersion('1.0')
    .addTag('API Bike-booking')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
