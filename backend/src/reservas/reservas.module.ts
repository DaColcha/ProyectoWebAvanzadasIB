import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import {MesasModule} from "../mesas/mesas.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Reserva} from "./entities/reserva.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [ReservasController],
  providers: [ReservasService],
  imports: [

    TypeOrmModule.forFeature([
      Reserva
    ]),

    MesasModule,
    AuthModule
  ]
})
export class ReservasModule {}
