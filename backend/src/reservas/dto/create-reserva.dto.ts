import {
    IsDate,
    IsIn,
    IsInt,
    IsOptional,
    IsPassportNumber,
    IsPositive,
    IsString,
    IsTimeZone,
    Matches, ValidationError
} from "class-validator";
import {User} from "../../auth/entities/user.entity";
import {Transform, Type} from "class-transformer";
import {BadRequestException} from "@nestjs/common";

export class CreateReservaDto {

    @IsString()
    @Transform(({ value }) => {
        const formatoToTransform = /^\d{2}-\d{2}-\d{4}$/.test(value);
        if (formatoToTransform) {
            // Si es en formato dd-mm-yyyy, transformamos a yyyy-mm-dd
            const [day, month, year] = value.split('-').map(Number);
            return `${year}-${month}-${day}`;
        }

        const formatoValido = /^\d{4}-\d{2}-\d{2}$/.test(value);
        if(formatoValido) return value;

        throw new BadRequestException('La fecha debe estar en el formato dd-mm-yyyy o yyyy-mm-dd');
    }, { toClassOnly: true })
    fecha: String;

    @IsString()
    @Matches(/^\d{2}:\d{2}$/, { message: 'La hora debe estar en el formato hh:mm' })
    hora: String;

    @IsInt()
    @IsPositive()
    cantidadPersonas: number;

    @IsString()
    @IsOptional()
    observaciones: string;

    @IsString()
    usuarioId: string;

}
