import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  MinLength,
} from 'class-validator';

import { BikeColor } from 'src/modules/bike/enums/bike-color.enum';
import { BikeCreateValidationRule } from 'src/modules/bike/enums/bike-create.validation-rule.enum';
import { BikeStatus } from 'src/modules/bike/enums/bike-status.enum';
import { BikeType } from 'src/modules/bike/enums/bike-type.enum';
import { WheelSize } from 'src/modules/bike/enums/wheel-size.enum';

export class CreateBikeDto {
  @ApiProperty({
    example: 'bmw-e',
    description: 'Name of the bike',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(BikeCreateValidationRule.MinLength)
  name: string;

  @ApiProperty({ example: 'Sport', description: 'Type of the bike' })
  @IsEnum(BikeType)
  type: BikeType;

  @ApiProperty({ example: 'Green', description: 'Color of the bike' })
  @IsEnum(BikeColor)
  color: BikeColor;

  @ApiProperty({ example: 'Available', description: 'Status of the bike' })
  @IsEnum(BikeStatus)
  status: BikeStatus;

  @ApiProperty({ example: '16', description: 'Wheel size of the bike' })
  @IsEnum(WheelSize)
  wheelSize: WheelSize;

  @ApiProperty({ example: '100', description: 'Price of the bike' })
  @IsNumber()
  @IsNotEmpty()
  @Min(BikeCreateValidationRule.MinPrice)
  price: number;

  @ApiProperty({
    example: 'very good bike',
    description: 'Description of the bike',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(BikeCreateValidationRule.MinLength)
  description: string;
}
