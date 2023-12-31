import { createAPI } from './api.js';
import { CreateBike } from '~/bundles/main/types/create-bike.type.js';
import { UpdateBike } from '~/bundles/main/types/update-bike.type.js';
import { Bike } from '~/bundles/main/types/bike.type.js';
import { BikeApiPath } from '~/bundles/main/enums/bike.api-path.enum.js';
import { BikeStatistics } from '~/bundles/main/types/bike-statistics.type.js';

const api = createAPI();

export const BikeService = {
  async getAll(): Promise<Bike[]> {
    const { data } = await api.get<Bike[]>(BikeApiPath.Root);
    return data;
  },

  async update({ bikeId, bike }: UpdateBike): Promise<void> {
    await api.patch(`/${bikeId}`, bike);
  },

  async delete(bikeId: string): Promise<void> {
    await api.delete(`/${bikeId}`);
  },

  async create(bike: CreateBike): Promise<void> {
    await api.post(BikeApiPath.Root, bike);
  },

  async getStatistics(): Promise<BikeStatistics> {
    const { data } = await api.get<BikeStatistics>(BikeApiPath.Statistics);
    return data;
  },
};
