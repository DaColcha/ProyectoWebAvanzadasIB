import { Module } from '@nestjs/common';
import { ReservasModule } from './reservas/reservas.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesModule } from './mensajes/mensajes.module';
import { AuthModule } from './auth/auth.module';
import {MesasModule} from "./mesas/mesas.module";
import { MenuModule } from './menu/menu.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false }
    }),

    ReservasModule, MensajesModule, AuthModule, MesasModule, MenuModule, SeedModule
  ],
})
export class AppModule {}
