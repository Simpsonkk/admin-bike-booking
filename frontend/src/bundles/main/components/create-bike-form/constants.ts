import { CreateBike } from '~/bundles/main/types/create-bike.type.js';

export const CREATE_BIKE_DEFAULT_VALUES: CreateBike = {
  name: '',
  description: '',
  color: '',
  status: '',
  type: '',
  wheelSize: '',
  price: '',
};

export const BIKE_CREATE_MESSAGE = 'Your bike has been created successfully';
