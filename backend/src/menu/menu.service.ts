import { Injectable } from '@nestjs/common';
import {Menu} from "./entities/menu.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class MenuService {

  constructor(
      @InjectRepository(Menu)
        private menuRepository: Repository<Menu>
  ) {
  }

  async findAll() {
    return await this.menuRepository.find();
  }

}
