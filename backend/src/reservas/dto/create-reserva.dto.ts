import { IsDate, IsIn, IsInt, IsOptional, IsPassportNumber, IsPositive, IsString } from "class-validator";
import {User} from "../../auth/entities/user.entity";

export class CreateReservaDto {

    @IsDate()
    fecha: Date;

    @IsString()
    hora: Date;

    @IsInt()
    @IsPositive()
    cantidadPersonas: number;

    @IsString()
    @IsOptional()
    observaciones: string;

    @IsString()
    usuarioId: string;

}
