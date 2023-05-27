import { Module } from '@nestjs/common';
import { FarmersModule } from './farmers/farmers.module';

@Module({
  imports: [FarmersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
