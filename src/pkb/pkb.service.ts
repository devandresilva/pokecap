import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ModifyResult } from 'mongoose';
import { Pkb } from './schemas/pkb.schema';

@Injectable()
export class PkbService {
  constructor(@InjectModel(Pkb.name) private pkbModel: Model<Pkb>) {}

  async create(pkb: Pkb): Promise<Pkb> {
    const createdPkb = new this.pkbModel(pkb);
    return createdPkb.save();
  }

  async findAll(): Promise<Pkb[]> {
    return this.pkbModel.find().exec();
  }

  async findOne(id: string, owner: string): Promise<Pkb> {
    return this.pkbModel.findOne({id: id, owner: owner}).exec();
  }

  async update(id: string, updatedPkb: Pkb): Promise<Pkb> {
    return this.pkbModel
      .findOneAndUpdate({id: id, owner: updatedPkb.owner}, updatedPkb, { new: true, upsert: true })
      .exec();
  }

  async remove(id: string): Promise<ModifyResult<Pkb>> {
    return this.pkbModel.findOneAndDelete({ _id: id }).exec();
  }
}
