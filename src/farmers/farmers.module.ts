import { Module } from '@nestjs/common';
import { FarmersService } from './farmers.service';
import { FarmersController } from './farmers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmerSchema, Farmers } from './schema/farmer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Farmers.name,
        schema: FarmerSchema,
      },
    ]),
  ],
  controllers: [FarmersController],
  providers: [FarmersService],
})
export class FarmersModule {}
