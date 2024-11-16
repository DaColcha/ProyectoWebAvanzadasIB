import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Reserva} from "../../reservas/entities/reserva.entity";

@Entity()
export class Mesa{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "int"})
    numeroPersonas: number;

    @Column({ type: "boolean"})
    disponible: boolean;

    @OneToMany(
        () => Reserva,
        (reserva) => reserva.mesa
    )
    reservas: Reserva[];
}