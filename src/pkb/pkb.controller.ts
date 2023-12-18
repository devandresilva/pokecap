import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PkbService } from './pkb.service';
import { Pkb } from './schemas/pkb.schema';

@Controller('pkb')
export class PkbController {
  constructor(private readonly pkbService: PkbService) {}

  @Post()
  create(@Body() pkb: Pkb) {
    return this.pkbService.create(pkb);
  }

  @Get()
  findAll() {
    return this.pkbService.findAll();
  }

  @Get(':owner/:id')
  findOne(@Param('id') id: string, @Param('owner') owner: string) {
    return this.pkbService.findOne(id, owner);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPkb: Pkb) {
    return this.pkbService.update(id, updatedPkb);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pkbService.remove(id);
  }
}
