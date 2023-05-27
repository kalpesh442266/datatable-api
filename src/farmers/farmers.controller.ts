import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFarmerDto, QueryValidatorFarmerDto } from './dto';
import { UpdateFarmerDto } from './dto/update-farmer.dto';
import { FarmersService } from './farmers.service';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  // create a new farmer entry
  @Post()
  async create(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    createFarmerDto: CreateFarmerDto,
  ) {
    return await this.farmersService.create(createFarmerDto);
  }

  // get and filter all farmers
  @Get()
  async getAll(
    @Query(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    query: QueryValidatorFarmerDto,
  ) {
    const page: number = parseInt(query.page) || 1;
    const limit: number = parseInt(query.limit) || 10;
    const order: string = query.order || '-1';
    const sortBy: string = query.sortBy || '_id';
    delete query.page;
    delete query.limit;
    delete query.order;
    delete query.sortBy;

    const data = await this.farmersService.findAll(
      page,
      limit,
      order,
      sortBy,
      query,
    );
    const total = await this.farmersService.count(query);

    return {
      data,
      page,
      total,
      limit,
      last_page: Math.ceil(total / limit),
    };
  }

  // get single farmer
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.farmersService.findOne({ _id: id });
  }

  // edit single farmer
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    updateCategoryDto: UpdateFarmerDto,
  ) {
    return this.farmersService.findOneAndUpdate(id, updateCategoryDto);
  }

  // delete single farmer
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.farmersService.delete({ _id: id });
  }

  // edit many farmer
  @Delete()
  async deleteMany(@Body('ids') ids: string) {
    const idArr = ids.split(',');
    return await this.farmersService.deleteMany({ _id: { $in: idArr } });
  }
}
