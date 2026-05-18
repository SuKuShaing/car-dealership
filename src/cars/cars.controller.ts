// Los Controller Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.

import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	ParseUUIDPipe,
	Patch,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto copy';

// Hasta donde entiendo en .controller.ts van los métodos del protocolo HTTP para el endpoint cars
// y en service van las funciones

@Controller('cars')
export class CarsController {
	constructor(private readonly carsService: CarsService) {}

	@Get()
	getAllCars() {
		return this.carsService.findAll();
	}

	@Get(':id')
	GetCarById(@Param('id', ParseUUIDPipe) id: string) {
		return this.carsService.findOneById(id);
	}

	@Post()
	// @UsePipes(ValidationPipe), se cambió esta validación local del endpoint por una validación global, ahora se verifican todos los endpoints
	createCar(@Body() createCarDto: CreateCarDto) {
		return this.carsService.create(createCarDto);
	}

	@Patch(':id')
	updateCar(
		@Param('id', ParseUUIDPipe) id: string,
		@Body() updateCarDto: UpdateCarDto,
	) {
		return this.carsService.update(id, updateCarDto);
	}

	@Delete(':id')
	deleteCar(@Param('id', ParseUUIDPipe) id: string) {
		return {
			method: 'delete',
			id,
		};
	}
}
