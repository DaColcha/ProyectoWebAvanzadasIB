import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import {Auth} from "../auth/decorators";

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  @Auth()
  findAll() {
    return this.menuService.findAll();
  }

}
