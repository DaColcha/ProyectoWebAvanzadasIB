import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import {MesasModule} from "../mesas/mesas.module";
import {MenuModule} from "../menu/menu.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
      MesasModule, MenuModule, AuthModule
  ],
})
export class SeedModule {}
