import { BikeStatus } from '~/bundles/main/enums/bike-status.enum.js';

export const BIKE_STATUS_OPTIONS = Object.keys(BikeStatus).map((key) => ({
  label: BikeStatus[key as keyof typeof BikeStatus],
  value: BikeStatus[key as keyof typeof BikeStatus],
}));

export const BIKE_UPDATE_MESSAGE =
  'Bike`s status has been updated successfully';

export const BIKE_DELETE_MESSAGE = 'Selected Bike has been deleted successfully';
