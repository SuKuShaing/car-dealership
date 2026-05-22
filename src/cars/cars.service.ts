import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
	private cars: Car[] = [
		// {
		// 	id: uuid(),
		// 	brand: 'Toyota',
		// 	model: 'Corolla',
		// },
		// {
		// 	id: uuid(),
		// 	brand: 'Honda',
		// 	model: 'Civic',
		// },
		// {
		// 	id: uuid(),
		// 	brand: 'Jeep',
		// 	model: 'Cherokee',
		// },
	];

	findAll() {
		return this.cars;
	}

	findOneById(id: string) {
		const car = this.cars.find((car) => car.id === id);

		if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

		return car;
	}

	create(createCarDTO: CreateCarDto) {
		const newCar = this.cars.push({
			id: uuid(),
			// brand: createCarDTO.brand,
			// model: createCarDTO.model,
			...createCarDTO,
		});
		return this.cars[newCar - 1];
	}

	update(id: string, updateCarDto: UpdateCarDto) {
		let carDB = this.findOneById(id); // sí pasa esta línea, significa que tenemos el auto a modificar, sí no se lanzó la excepción

		// por sí intentan cambiar el id, cuando usemos bases de datos, esto no será necesario
		if (updateCarDto.id && updateCarDto.id !== id)
			throw new BadRequestException('Car id is no valid inside body');

		this.cars = this.cars.map((car) => {
			if (car.id === id) {
				carDB = {
					...carDB,
					...updateCarDto, // sobre escribe las propiedades que estaban en carDB con las que vienen
					id, // para que no lo sobrescriban, en caso de que hayan enviado uno que parezca uuid
				};
				return carDB;
			}

			return car;
		});

		return carDB; // carro actualizado
	}

	delete(id: string) {
		const carToDelete = this.findOneById(id); // Sí pasa esta línea, el auto con ese id existe

		this.cars = this.cars.filter((car) => car.id !== id);
	}

	fillCarsWithSeedData(cars: Car[]) {
		this.cars = cars;
	}
}
