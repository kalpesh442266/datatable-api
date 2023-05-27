import { Injectable } from '@nestjs/common';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Farmers } from './schema/farmer.schema';
import { Model } from 'mongoose';

@Injectable()
export class FarmersService {
  constructor(@InjectModel(Farmers.name) private farmersDb: Model<Farmers>) {}

  async create(createFarmerDto: CreateFarmerDto) {
    return await this.farmersDb.create(createFarmerDto);
  }
}
