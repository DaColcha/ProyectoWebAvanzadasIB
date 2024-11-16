import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Mesa} from "./entity/mesa.entity";
import {Repository} from "typeorm";

@Injectable()
export class MesasService {

    constructor(

        @InjectRepository(Mesa)
        private readonly mesaRepository: Repository<Mesa>,
    ) {
    }

    async findAvaiblable(num: number) {
        const mesas = await this.mesaRepository.find({
            where: {
                disponible: true
            }
        });

        if(!mesas) throw new NotFoundException("No hay mesas disponibles");

        const mesaAdecuada = mesas.find(mesa =>
            mesa.numeroPersonas >= num && mesa.numeroPersonas <= (num + 2));

        if (!mesaAdecuada) throw new NotFoundException("No hay mesas disponibles para la cantidad de personas solicitadas");

        return mesaAdecuada
    }

    async updateState(id: number, state : boolean){
        const mesa = await this.mesaRepository.findOneBy({id: id});
        if (!mesa) throw new NotFoundException("Mesa no encontrada");
        mesa.disponible = state;
        await this.mesaRepository.save(mesa);
    }
}
