import { Module } from '@nestjs/common';
import { TrainerController } from './trainer.controller';
import { TrainerService } from './trainer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerSchema } from './schemas/trainer.schema';

@Module({
  controllers: [TrainerController],
  providers: [TrainerService],
  imports: [
    MongooseModule.forFeature([{ name: 'Trainer', schema: TrainerSchema }]),
  ],
})
export class TrainerModule {}
