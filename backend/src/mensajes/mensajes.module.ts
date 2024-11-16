import { Module } from '@nestjs/common';
import { MensajesService } from './mensajes.service';
import { MensajesGateway } from './mensajes.gateway';

@Module({
  providers: [MensajesGateway, MensajesService],
})
export class MensajesModule {}
