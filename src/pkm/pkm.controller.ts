import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PkmService } from './pkm.service';
import { Pkm } from './schemas/pkm.schema';

@Controller('pkm')
export class PkmController {
  constructor(private readonly pkmService: PkmService) {}

  @Post()
  create(@Body() pkm: Pkm) {
    return this.pkmService.create(pkm);
  }

  @Get()
  findAll() {
    return this.pkmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pkmService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPkm: Pkm) {
    return this.pkmService.update(id, updatedPkm);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pkmService.remove(id);
  }
}
