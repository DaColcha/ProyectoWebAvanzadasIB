import {Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe} from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import {ValidRoles} from "../auth/interfaces";
import {Auth} from "../auth/decorators";

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  @Auth()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get()
  @Auth( ValidRoles.ADMIN )
  findAll() {
    return this.reservasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.reservasService.findOne(id);
  }

  @Get('user/:id')
  @Auth()
  findByUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.reservasService.findByUser(id);
  }

  @Patch(':id')
  @Auth()
  update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateReservaDto: UpdateReservaDto) {
    return this.reservasService.update(id, updateReservaDto);
  }

  @Delete(':id')
  @Auth( ValidRoles.ADMIN)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.reservasService.remove(id);
  }
}
