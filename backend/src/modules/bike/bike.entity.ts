import { ApiProperty } from '@nestjs/swagger';
import { BikeColor } from 'src/modules/bike/enums/bike-color.enum';
import { BikeStatus } from 'src/modules/bike/enums/bike-status.enum';
import { BikeType } from 'src/modules/bike/enums/bike-type.enum';
import { WheelSize } from 'src/modules/bike/enums/wheel-size.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bike {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier of the bike',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'bmw-e',
    description: 'Name of the bike',
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ example: 'Sport', description: 'Type of the bike' })
  @Column({
    type: 'enum',
    enum: BikeType,
  })
  type: BikeType;

  @ApiProperty({ example: 'Available', description: 'Status of the bike' })
  @Column({
    type: 'enum',
    enum: BikeStatus,
  })
  status: BikeStatus;

  @ApiProperty({ example: 'Green', description: 'Color of the bike' })
  @Column({
    type: 'enum',
    enum: BikeColor,
  })
  color: BikeColor;

  @ApiProperty({ example: '16', description: 'Wheel size of the bike' })
  @Column({
    type: 'enum',
    enum: WheelSize,
  })
  wheelSize: WheelSize;

  @ApiProperty({ example: '100', description: 'Price of the bike' })
  @Column({ type: 'numeric' })
  price: number;

  @ApiProperty({
    example: 'very good bike',
    description: 'Description of the bike',
  })
  @Column()
  description: string;
}
