import { Module } from '@nestjs/common';
import { PkbController } from './pkb.controller';
import { PkbService } from './pkb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PkbSchema } from './schemas/pkb.schema';

@Module({
  controllers: [PkbController],
  providers: [PkbService],
  imports: [MongooseModule.forFeature([{ name: 'Pkb', schema: PkbSchema }])],
})
export class PkbModule {}
