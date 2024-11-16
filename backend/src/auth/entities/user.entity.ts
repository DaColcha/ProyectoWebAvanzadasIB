
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Reserva} from "../../reservas/entities/reserva.entity";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    usuario: string;

    @Column('text', { select: false })
    contrasena: string;

    @Column('text')
    nombreCompleto: string;

    @Column('text', { default: ['client']})
    rol: string;

    @OneToMany(
        () => Reserva,
        (reserva) => reserva.usuario,
        { cascade: true }
    )
    reservas: Reserva[];


    @BeforeInsert()
    checkFieldsBeforeInsert(){
        this.usuario = this.usuario.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate(){
        this.checkFieldsBeforeInsert();
    }
}
