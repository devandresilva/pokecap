import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PkmDocument = HydratedDocument<Pkm>;

@Schema()
export class Pkm {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  sprite: string;

  @Prop({ type: [String], required: true })
  types: string[];
}

export const PkmSchema = SchemaFactory.createForClass(Pkm);