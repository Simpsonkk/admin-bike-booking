import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { ApiPath } from 'src/common/enums/api-path.enum';
import { BikeApiPath } from 'src/modules/bike/enums/bike.api-path.enum';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorMessage } from 'src/common/enums/error-message.enum';

@ApiTags('Bike')
@Controller(ApiPath.Bike)
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  @ApiOperation({ summary: 'Bike creating' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Bike was created successfully',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ErrorMessage.BikeAlreadyExists,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Post(BikeApiPath.Root)
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.create(createBikeDto);
  }

  @ApiOperation({ summary: 'Get all bikes' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Bikes were sent successfully',
  })
  @Get(BikeApiPath.Root)
  findAll() {
    return this.bikeService.findAll();
  }

  @ApiOperation({ summary: 'Get bike statistics' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Bike statistics was sent successfully',
  })
  @Get(BikeApiPath.Statistics)
  getBikeStatistics() {
    return this.bikeService.getBikeStatistics();
  }

  @ApiOperation({ summary: 'Update bike' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Bike was updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessage.BikeNotExist,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(BikeApiPath.Id)
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikeService.update(id, updateBikeDto);
  }

  @ApiOperation({ summary: 'Delete bike' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Bike was deleted successfully',
  })
  @Delete(BikeApiPath.Id)
  remove(@Param('id') id: string) {
    return this.bikeService.remove(id);
  }
}
