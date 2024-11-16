import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../auth/entities/user.entity";
import {Repository} from "typeorm";
import {Menu} from "../menu/entities/menu.entity";
import {Mesa} from "../mesas/entity/mesa.entity";
import * as seed from './seed-data';

@Injectable()
export class SeedService {

    constructor(

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @InjectRepository(Menu)
        private readonly menuRepository: Repository<Menu>,

        @InjectRepository(Mesa)
        private readonly mesaRepository: Repository<Mesa>,

    ) {}

    async runSeed() {

        await this.deleTable( this.menuRepository );
        await this.deleTable( this.mesaRepository );
        await this.deleTable( this.userRepository );

        const inserted : boolean = await this.allInserts();

        return inserted ? 'Data inserted successfully' : 'Error inserting data';
    }

    private async deleTable( repository: Repository<any> ) {

        const queryBuilder = repository.createQueryBuilder();

        await queryBuilder.delete().where({}).execute();

        return true;
    }

    private async insertData( repository: Repository<any>, data: any[] ) {

        const entities = [];

        data.forEach( entity => {
            entities.push( repository.create( entity ) );
        });

        return await repository.save(entities);
    }

    private async allInserts(){

        const insertPromises = [];

        insertPromises.push( this.insertData( this.menuRepository, seed.menusSeed ) );
        insertPromises.push( this.insertData( this.mesaRepository, seed.mesasSeed ) );
        insertPromises.push( this.insertData( this.userRepository, seed.usersSeed ) );

        await Promise.all(insertPromises);

        return true;
    }

}
