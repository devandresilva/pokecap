import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TrainerDocument = HydratedDocument<Trainer>;

@Schema()
export class Trainer {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  sprite: string;

  @Prop({ type: [String], required: true })
  time: number[];
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);
