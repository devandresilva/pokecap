import { Injectable,  ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ModifyResult } from 'mongoose';
import { Trainer } from './schemas/trainer.schema';

@Injectable()
export class TrainerService {
  constructor(
    @InjectModel(Trainer.name) private readonly trainerModel: Model<Trainer>,
  ) {}

  async create(trainer: Trainer): Promise<Trainer> {
    const createdTrainer = new this.trainerModel(trainer);
    const exist_trainer = await this.trainerModel.findOne({name: createdTrainer.name}).exec();
    if (exist_trainer){
      throw new ConflictException(`Trainer with name ${createdTrainer.name} already exists`);
    }
    else {
      return createdTrainer.save();
    }
  }

  async findAll(): Promise<Trainer[]> {
    return this.trainerModel.find().exec();
  }

  async findOne(id: string): Promise<Trainer> {
    return this.trainerModel.findById(id).exec();
  }

  async findByName(name: string): Promise<Trainer> {
    return this.trainerModel.findOne({name: name}).exec();
  }

  async getTeam(id: string): Promise<number[]> {
    return this.trainerModel
      .findById(id)
      .exec()
      .then((trainer) => {
        return trainer.time;
      });
  }

  async update(id: string, updatedTrainer: Trainer): Promise<Trainer> {
    return this.trainerModel
      .findByIdAndUpdate(id, updatedTrainer, { new: true })
      .exec();
  }

  async remove(id: string): Promise<ModifyResult<Trainer>> {
    return this.trainerModel.findOneAndDelete({ _id: id }).exec();
  }
}
