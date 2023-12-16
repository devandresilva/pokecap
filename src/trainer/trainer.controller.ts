import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { Trainer } from './schemas/trainer.schema';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Post()
  create(@Body() trainer: Trainer) {
    return this.trainerService.create(trainer);
  }

  @Get()
  findAll() {
    return this.trainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTrainer: Trainer) {
    return this.trainerService.update(id, updatedTrainer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainerService.remove(id);
  }
}
