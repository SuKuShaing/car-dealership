// Los Controller Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.

import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
	@Get()
	getAllCars() {
		return this.cars;
	}

	@Get(':id')
	GetCarById(@Param('id') id: string) {
		let car = this.cars[+id];

		if (!car) {
			car = 'Auto no asignado';
		}

		console.log({ id, car });
		return { id, car };
	}
}
