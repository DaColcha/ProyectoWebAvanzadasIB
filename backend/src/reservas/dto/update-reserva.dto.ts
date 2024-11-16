import { PartialType } from '@nestjs/mapped-types';
import { CreateReservaDto } from './create-reserva.dto';
import {IsIn} from "class-validator";

export class UpdateReservaDto extends PartialType(CreateReservaDto) {

    @IsIn(['solicitada', 'confirmada', 'cancelada', 'finalizada'])
    estado?: string;
}
