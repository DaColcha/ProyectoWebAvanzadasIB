import {BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException} from '@nestjs/common';
import {CreateReservaDto, UpdateReservaDto} from './dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Reserva} from './entities/reserva.entity';
import {isUUID} from "class-validator";
import {Repository} from "typeorm";
import {MesasService} from "../mesas/mesas.service";
import {User} from "../auth/entities/user.entity";

@Injectable()
export class ReservasService {

  private readonly logger = new Logger(ReservasService.name)

  constructor(

    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly mesasService: MesasService

  ) {}

  async create(createReservaDto: CreateReservaDto) {

    const mesa = await this.mesasService.findAvaiblable(createReservaDto.cantidadPersonas);

    const usuario = await this.userRepository.findOneBy({ id: createReservaDto.usuarioId });

    if (!usuario) throw new NotFoundException("Usuario no encontrado");

    try {

      if(mesa){

        const reserva = this.reservaRepository.create({
          ...createReservaDto,
          estado: 'solicitada',
          mesa: mesa,
          usuario: usuario
        });

        await this.reservaRepository.save(reserva);

        await this.mesasService.updateState(mesa.id, false); // Ocupar mesa
        return {
            ...reserva,
            mesa: { id: mesa.id }
        };
      }

    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    return await this.reservaRepository.find({
      relations: { usuario: true}
    });
  }

  async findOne(id: string) {

    return this.reservaRepository.findOne({
      where: {id: id},
      relations: ['mesa', 'usuario']
    });
  }

  async findByUser(id: string) {

    if( !isUUID(id) ){
      throw new BadRequestException("Id de usuario invalido");
    }

    const reservas = await this.reservaRepository.find({
      where: {
        usuario: {id: id}
      },
      relations: ['mesa']
    })

    if (!reservas) throw new NotFoundException("Reserva no encontrada");

    return reservas;
  }

  async update(id: string, updateReservaDto: UpdateReservaDto) {

    const reserva = await this.findOne(id);

    let newData;

    if (!reserva) throw new NotFoundException("Reserva no encontrada");

    if(updateReservaDto.usuarioId){
        const {usuarioId, ...rest} = updateReservaDto;

        const usuario = await this.userRepository.findOneBy({ id: updateReservaDto.usuarioId });

        if (!usuario) throw new NotFoundException("Usuario no encontrado");

        newData = { ...rest, usuario: usuario };
    }else{
        newData = updateReservaDto;
    }

    try{
        this.reservaRepository.merge(reserva, newData);

        await this.reservaRepository.save(reserva);
        if(updateReservaDto.estado === 'cancelada' || updateReservaDto.estado === 'finalizada'){
          await this.mesasService.updateState(reserva.mesa.id, true); // Liberar mesa
        }

        return reserva;
    }catch (error){
      this.handleExceptions(error);
    }

  }

  async remove(id: string) {
    const reserva = await this.findOne(id);

    if(reserva) await this.reservaRepository.delete(reserva.id)

    return { message: "Reserva eliminada" };
  }

  private handleExceptions( error: any){

    if (error.code === '23505') throw new BadRequestException(error.detail);
    
    this.logger.error(error.message);
    throw new InternalServerErrorException("unexpected error, check server logs");
  }
}

