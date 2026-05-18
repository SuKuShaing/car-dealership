import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// useGlobalPipes, habilita para siempre se cumpla el que tengan que enviar la información como se requiere en loe DTO
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
		}),
	);

	await app.listen(process.env.PORT ?? 3000);
	console.log(
		`Backend iniciado en: http://localhost:${process.env.PORT ?? 3000}/`,
	);
}
bootstrap();
