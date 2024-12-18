import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import {Menu} from "./entities/menu.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [
    TypeOrmModule.forFeature([
      Menu
    ]),

    AuthModule
  ],
  exports: [ TypeOrmModule]
})
export class MenuModule {}
