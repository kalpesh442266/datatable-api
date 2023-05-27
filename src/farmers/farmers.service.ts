import { Injectable } from '@nestjs/common';
import { CreateFarmerDto } from './dto/create-farmer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Farmers } from './schema/farmer.schema';
import { Model } from 'mongoose';
import { QueryValidatorFarmerDto } from './dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';

@Injectable()
export class FarmersService {
  constructor(@InjectModel(Farmers.name) private farmersDb: Model<Farmers>) {}

  // create a new farmer
  async create(createFarmerDto: CreateFarmerDto) {
    return await this.farmersDb.create(createFarmerDto);
  }

  // find all and filter farmers
  async findAll(
    page = 1,
    limit = 10,
    order = '-1',
    sortBy = '_id',
    query: QueryValidatorFarmerDto,
  ) {
    // create sorting criteria
    const sortCriteria = {};
    sortCriteria[sortBy] = order;

    return await this.farmersDb
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort(sortCriteria)
      .exec();
  }

  // count data of farmers in db
  async count(query) {
    return await this.farmersDb.count(query);
  }

  // find one farmer by passing a query
  async findOne(query) {
    return await this.farmersDb.findOne(query);
  }

  // update farmer
  async findOneAndUpdate(id, updateCategoryDto: UpdateFarmerDto) {
    return await this.farmersDb.findOneAndUpdate(
      { _id: id },
      updateCategoryDto,
      { returnOriginal: false },
    );
  }

  async delete(query) {
    return await this.farmersDb.deleteOne(query);
  }

  async deleteMany(query) {
    return await this.farmersDb.deleteMany(query);
  }
}
