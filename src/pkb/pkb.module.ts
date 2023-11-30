import { Module } from '@nestjs/common';
import { PkbController } from './pkb.controller';
import { PkbService } from './pkb.service';

@Module({
  controllers: [PkbController],
  providers: [PkbService]
})
export class PkbModule {}
