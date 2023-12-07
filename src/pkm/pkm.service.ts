import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pkm } from './schemas/pkm.schema';

@Injectable()
export class PkmService {
  constructor(@InjectModel(Pkm.name) private readonly pkmModel: Model<Pkm>) {}

  async create(pkm: Pkm): Promise<Pkm> {
    const createdPkm = new this.pkmModel(pkm);
    return createdPkm.save();
  }

  async findAll(): Promise<Pkm[]> {
    return this.pkmModel.find().exec();
  }

  async findOne(id: string): Promise<Pkm> {
    return this.pkmModel.findById(id).exec();
  }

  async update(id: string, updatedPkm: Pkm): Promise<Pkm> {
    return this.pkmModel
      .findByIdAndUpdate(id, updatedPkm, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.pkmModel.findOneAndDelete({ _id: id }).exec();
  }
}
