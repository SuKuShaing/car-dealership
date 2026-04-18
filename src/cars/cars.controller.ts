// Los Controller Controlan rutas, son los encargados de escuchar la solicitud y emitir una respuesta.

import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
	@Get()
	getAllCars() {
		return ['Toyota', 'Honda', 'Jeep'];
	}
}
