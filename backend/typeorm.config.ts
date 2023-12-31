import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Bike } from 'src/modules/bike/bike.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.getOrThrow('DB_HOST'),
  port: configService.getOrThrow('DB_PORT'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  database: configService.getOrThrow('DB_NAME'),
  entities: [Bike],
  synchronize: true,
};

export default new DataSource(dataSourceOptions);
