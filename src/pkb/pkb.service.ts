import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  async findOne(id: string): Promise<Pkb> {
    return this.pkbModel.findById(id).exec();
  }

  async update(id: string, updatedPkb: Pkb): Promise<Pkb> {
    return this.pkbModel
      .findByIdAndUpdate(id, updatedPkb, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.pkbModel.findOneAndDelete({ _id: id }).exec();
  }
}
