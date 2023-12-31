import { BikeColor } from '~/bundles/main/enums/bike-color.enum.js';
import { BikeStatus } from '~/bundles/main/enums/bike-status.enum.js';
import { BikeType } from '~/bundles/main/enums/bike-type.enum.js';
import { WheelSize } from '~/bundles/main/enums/wheel-size.enum.js';

export type Bike = {
  id: string;
  name: string;
  type: BikeType;
  color: BikeColor;
  status: BikeStatus;
  wheelSize: WheelSize;
  price: number;
  description: string;
};
