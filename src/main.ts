import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // فعال‌سازی CORS برای ارتباط با فرانت‌اند
  app.enableCors();

  // تنظیمات Swagger
  const config = new DocumentBuilder()
    .setTitle('Miapp API')
    .setDescription('Miapp API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
