import { Module } from '@nestjs/common';
import { PkmController } from './pkm.controller';
import { PkmService } from './pkm.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PkmSchema } from './schemas/pkm.schema';

@Module({
  controllers: [PkmController],
  providers: [PkmService],
  imports: [MongooseModule.forFeature([{ name: 'Pkm', schema: PkmSchema }])],
  exports: [PkmService]
})
export class PkmModule {}

