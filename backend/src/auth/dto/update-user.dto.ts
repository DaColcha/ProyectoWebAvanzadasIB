import { PartialType } from "@nestjs/mapped-types";
import { CreateReservaDto } from "src/reservas/dto";

export class UpdateUserDto extends PartialType(CreateReservaDto){}