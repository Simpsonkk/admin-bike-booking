import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsString,
  IsNumber,
  Min,
  MinLength,
  IsOptional,
} from 'class-validator';

import { BikeColor } from 'src/modules/bike/enums/bike-color.enum';
import { BikeCreateValidationRule } from 'src/modules/bike/enums/bike-create.validation-rule.enum';
import { BikeStatus } from 'src/modules/bike/enums/bike-status.enum';
import { BikeType } from 'src/modules/bike/enums/bike-type.enum';
import { WheelSize } from 'src/modules/bike/enums/wheel-size.enum';

export class UpdateBikeDto {
  @ApiProperty({
    example: 'Sport',
    description: 'Type of the bike',
    required: false,
  })
  @IsOptional()
  @IsEnum(BikeType)
  type: BikeType;

  @ApiProperty({
    example: 'Green',
    description: 'Color of the bike',
    required: false,
  })
  @IsOptional()
  @IsEnum(BikeColor)
  color: BikeColor;

  @ApiProperty({
    example: 'Available',
    description: 'Status of the bike',
    required: false,
  })
  @IsOptional()
  @IsEnum(BikeStatus)
  status: BikeStatus;

  @ApiProperty({
    example: '16',
    description: 'Wheel size of the bike',
    required: false,
  })
  @IsOptional()
  @IsEnum(WheelSize)
  wheelSize: WheelSize;

  @ApiProperty({
    example: '100',
    description: 'Price of the bike',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  @Min(BikeCreateValidationRule.MinPrice)
  price: number;

  @ApiProperty({
    example: 'very good bike',
    description: 'Description of the bike',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(BikeCreateValidationRule.MinLength)
  description: string;
}
