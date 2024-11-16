import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Menu {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'text'})
    nombre: string;

    @Column({type: 'text'})
    descripcion: string;

    @Column({type: 'float'})
    precio: number;

    @Column({type: 'text'})
    imagen: string;
}
