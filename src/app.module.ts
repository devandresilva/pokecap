import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PkmModule } from './pkm/pkm.module';
import { TrainerModule } from './trainer/trainer.module';
import { PkbModule } from './pkb/pkb.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PkmService } from './pkm/pkm.service';

@Module({
  imports: [
    PkbModule,
    PkmModule,
    TrainerModule,
    MongooseModule.forRoot(
      'mongodb+srv://valmirfrancisco1:en0BSnDlOJYNajDj@pokecluster.gh2ylz6.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
