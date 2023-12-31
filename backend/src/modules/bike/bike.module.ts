import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { Bike } from 'src/modules/bike/bike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikeController],
  providers: [BikeService],
})
export class BikeModule {}
