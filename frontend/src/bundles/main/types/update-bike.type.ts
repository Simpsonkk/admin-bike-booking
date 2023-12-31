import { Bike } from '~/bundles/main/types/bike.type.js';

export type UpdateBike = {
  bikeId: string;
  bike: Partial<Bike>;
};
