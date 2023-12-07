import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PkmModule } from './pkm/pkm.module';
import { TrainerModule } from './trainer/trainer.module';
import { PkbModule } from './pkb/pkb.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PkbModule,
    MongooseModule.forRoot(
      'mongodb+srv://andresilva1:m7LBDuooLAkPtRbk@cluster0.a4jtjer.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
