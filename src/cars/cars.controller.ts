// Los Controller Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
	constructor(private readonly carsService: CarsService) {}

	@Get()
	getAllCars() {
		return this.carsService.findAll();
	}

	@Get(':id')
	GetCarById(@Param('id', ParseIntPipe) id: number) {
		// if (!car) {
		// 	return { id: '?', car: 'Auto no encontrado' };
		// }

		return this.carsService.findOneById(id);
	}
}
