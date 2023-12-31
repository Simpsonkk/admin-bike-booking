import { Injectable } from '@nestjs/common';
import { DeepPartial, EntityManager, EntityTarget } from 'typeorm';

import { BIKES } from 'src/modules/seed/seed-data/bike.seed';
import { Bike } from 'src/modules/bike/bike.entity';

@Injectable()
export class SeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async seed(): Promise<void> {
    await Promise.all([this.seedTable(Bike, BIKES)]);
  }

  private async seedTable<T>(
    entity: EntityTarget<T>,
    data: DeepPartial<T>[],
  ): Promise<void> {
    const existingData = await this.entityManager.count(entity);

    if (!existingData) {
      await this.entityManager.save(entity, data);
    }
  }
}
