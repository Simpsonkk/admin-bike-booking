import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike } from 'src/modules/bike/bike.entity';
import { ErrorMessage } from 'src/common/enums/error-message.enum';
import { BikeStatus } from 'src/modules/bike/enums/bike-status.enum';
import { BikeStatistics } from 'src/modules/bike/types/bike-statistics.type';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(Bike)
    private readonly bikeRepository: Repository<Bike>,
  ) {}

  async getBikeStatistics(): Promise<BikeStatistics> {
    const queryResult = await this.bikeRepository
      .createQueryBuilder('bike')
      .select('COUNT(1)', 'totalBikes')
      .addSelect(
        'SUM(CASE WHEN bike.status = :available THEN 1 ELSE 0 END)',
        'availableBikes',
      )
      .addSelect(
        'SUM(CASE WHEN bike.status = :busy THEN 1 ELSE 0 END)',
        'bookedBikes',
      )
      .addSelect('AVG(bike.price)', 'averageBikeCost')
      .setParameter('available', BikeStatus.Available)
      .setParameter('busy', BikeStatus.Busy)
      .getRawOne();

    return {
      totalBikes: Number(queryResult.totalBikes),
      availableBikes: Number(queryResult.availableBikes),
      bookedBikes: Number(queryResult.bookedBikes),
      averageBikeCost: Number(queryResult.averageBikeCost),
    };
  }

  async create(createBikeDto: CreateBikeDto): Promise<void> {
    const bike = await this.findByName(createBikeDto.name);

    if (bike) {
      throw new HttpException(
        ErrorMessage.BikeAlreadyExists,
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.bikeRepository
      .createQueryBuilder()
      .insert()
      .into(Bike)
      .values(createBikeDto)
      .execute();
  }

  private async findByName(bikeName: string): Promise<Bike> {
    return await this.bikeRepository
      .createQueryBuilder('bike')
      .where('bike.name = :bikeName', {
        bikeName,
      })
      .getOne();
  }

  private async findById(bikeId: string): Promise<Bike> {
    return await this.bikeRepository
      .createQueryBuilder('bike')
      .where('bike.id = :bikeId', {
        bikeId,
      })
      .getOne();
  }

  async update(
    id: string,
    bikeUpdateDto: Partial<UpdateBikeDto>,
  ): Promise<void> {
    const bike = await this.findById(id);

    if (!bike) {
      throw new HttpException(ErrorMessage.BikeNotExist, HttpStatus.NOT_FOUND);
    }

    await this.bikeRepository
      .createQueryBuilder()
      .update(Bike)
      .set(bikeUpdateDto)
      .where('bike.id = :id', {
        id,
      })
      .execute();
  }

  async findAll(): Promise<Bike[]> {
    return await this.bikeRepository
      .createQueryBuilder('bike')
      .orderBy('bike.status', 'ASC')
      .getMany();
  }

  async remove(id: string) {
    await this.bikeRepository
      .createQueryBuilder()
      .delete()
      .from(Bike)
      .where('bike.id = :id', {
        id,
      })
      .execute();
  }
}
