// Los Controller Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.

import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
	constructor(private readonly carsService: CarsService) {}

	@Get()
	getAllCars() {
		return this.carsService.findAll();
	}

	@Get(':id')
	GetCarById(@Param('id') id: string) {
		// if (!car) {
		// 	return { id: '?', car: 'Auto no encontrado' };
		// }

		console.log({ id: +id, car: this.carsService.findOneById(+id) });
		return this.carsService.findOneById(Number(id));
	}
}
