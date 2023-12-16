import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type PkbDocument = HydratedDocument<Pkb>;

@Schema()
export class Pkb {
  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  owner: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  catch_rate: number;

  @Prop({ required: true })
  qtd: number;
}

export const PkbSchema = SchemaFactory.createForClass(Pkb);
