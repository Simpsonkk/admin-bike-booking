import { Bike } from 'src/modules/bike/bike.entity';
import { BikeColor } from 'src/modules/bike/enums/bike-color.enum';
import { BikeStatus } from 'src/modules/bike/enums/bike-status.enum';
import { BikeType } from 'src/modules/bike/enums/bike-type.enum';
import { WheelSize } from 'src/modules/bike/enums/wheel-size.enum';

export const BIKES: Partial<Bike>[] = [
  {
    name: 'BMW-s',
    type: BikeType.Sport,
    color: BikeColor.Black,
    status: BikeStatus.Available,
    wheelSize: WheelSize.Medium,
    price: 100.11,
    description: 'very good bike',
  },
  {
    name: 'QWE-x',
    type: BikeType.Mini,
    color: BikeColor.Green,
    wheelSize: WheelSize.Large,
    status: BikeStatus.Busy,
    price: 600,
    description: 'best bike',
  },
  {
    name: 'RTX-v',

    type: BikeType.Sport,
    color: BikeColor.Black,
    wheelSize: WheelSize.Small,
    status: BikeStatus.Unavailable,
    price: 50,
    description: 'good bike',
  },
  {
    name: 'Rock-1',
    type: BikeType.Mini,
    color: BikeColor.White,
    wheelSize: WheelSize.ExtraLarge,
    status: BikeStatus.Unavailable,
    price: 200.55,
    description: 'cool bike',
  },
  {
    name: 'Monster',
    type: BikeType.Sport,
    color: BikeColor.Yellow,
    wheelSize: WheelSize.Small,
    status: BikeStatus.Busy,
    price: 500.33,
    description: 'cool bike',
  },
  {
    name: 'Best-1',
    type: BikeType.Classic,
    color: BikeColor.Red,
    wheelSize: WheelSize.Medium,
    status: BikeStatus.Available,
    price: 555.55,
    description: 'cool bike',
  },
  {
    name: 'VOVO-5',
    type: BikeType.Classic,
    color: BikeColor.Green,
    wheelSize: WheelSize.Medium,
    status: BikeStatus.Available,
    price: 444.44,
    description: 'cool bike',
  },
  {
    name: 'GO-5-7-4',
    type: BikeType.Mini,
    color: BikeColor.White,
    wheelSize: WheelSize.Medium,
    status: BikeStatus.Unavailable,
    price: 333.33,
    description: 'cool bike',
  },
  {
    name: 'TYT-7-8-9',
    type: BikeType.Classic,
    color: BikeColor.Red,
    wheelSize: WheelSize.Medium,
    status: BikeStatus.Busy,
    price: 222.99,
    description: 'cool bike',
  },
  {
    name: 'Rap-3-5-7',
    type: BikeType.Mini,
    color: BikeColor.Red,
    wheelSize: WheelSize.ExtraLarge,
    status: BikeStatus.Available,
    price: 50.1,
    description: 'cool bike',
  },
  {
    name: 'Top-5-6-7',
    type: BikeType.Classic,
    color: BikeColor.Red,
    wheelSize: WheelSize.Medium,
    status: BikeStatus.Available,
    price: 800,
    description: 'cool bike',
  },
];
