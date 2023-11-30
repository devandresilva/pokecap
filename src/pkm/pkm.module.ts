import { Module } from '@nestjs/common';
import { PkmController } from './pkm.controller';
import { PkmService } from './pkm.service';

@Module({
  controllers: [PkmController],
  providers: [PkmService]
})
export class PkmModule {}
