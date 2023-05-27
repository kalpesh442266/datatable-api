import { Module } from '@nestjs/common';
import { FarmersModule } from './farmers/farmers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    FarmersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
