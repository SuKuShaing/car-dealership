import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
	@IsString()
	readonly brand: string;

	// @MinLength(3)
	@IsString()
	readonly model: string;
}
