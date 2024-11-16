import { WebSocketGateway } from '@nestjs/websockets';
import { MensajesService } from './mensajes.service';

@WebSocketGateway()
export class MensajesGateway {
  constructor(private readonly mensajesService: MensajesService) {}
}
