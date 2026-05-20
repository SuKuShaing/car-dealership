import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
	@IsString()
	@MinLength(1) // puesto que un string vacio aún se considera string
	name: string | undefined;
}
