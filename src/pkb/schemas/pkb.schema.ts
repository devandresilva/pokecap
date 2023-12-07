import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PkbDocument = HydratedDocument<Pkb>;

@Schema()
export class Pkb {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  captura: number;

  @Prop({ required: true })
  qtd: number;
}

export const PkbSchema = SchemaFactory.createForClass(Pkb);
