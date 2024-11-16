import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp} from "typeorm";
import {User} from "../../auth/entities/user.entity";
import {Mesa} from "../../mesas/entity/mesa.entity";

@Entity({ name: 'reservas' })
export class Reserva {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date'})
    fecha: Date;

    @Column({ type: 'time' })
    hora: String;

    @Column({ type: 'int' })
    cantidadPersonas: number;

    @Column({ type: 'text' })
    observaciones: string;

    @Column({ type: 'text' })
    estado: string;


    @ManyToOne(
        () => User,
        (user) => user.reservas
    )
    usuario: User;

    @ManyToOne(
        () => Mesa,
        (mesa) => mesa.reservas
    )
    mesa: Mesa;
}
