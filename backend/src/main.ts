import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con el puerto donde corre tu aplicación de Vite
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Si estás manejando cookies o autenticación con credenciales
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
