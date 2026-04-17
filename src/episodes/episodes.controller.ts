import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  NotFoundException,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from 'src/episodes/dto/create-episode.dto';
import { IsPositivePipe } from '../pipes/is-positive.pipe';
import { ApiKeyGuard } from 'src/guards/api-key/api-key.guard';


@Controller('episodes')
export class EpisodesController {
  constructor(private episodeService: EpisodesService) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe, IsPositivePipe) limit: number,
  ) {
    console.log(sort, limit);
    return this.episodeService.findAll(sort);
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    console.log(id);
    const episode = await this.episodeService.findOne(id);
    if (!episode) {
      //throw new HttpException("Episode not found", HttpStatus.NOT_FOUND);
      throw new NotFoundException('Episode not found');
    }
  }

  @UseGuards(ApiKeyGuard)
  @Post()
  create(@Body(ValidationPipe) dto: CreateEpisodeDto) {
    console.log(dto);
    return this.episodeService.create(dto);
  }

  @Get('featured')
  findFeatured() {
    return this.episodeService.findFeatured();
  }

  @Put(':id')
  update(@Body() input: any, @Param() id: string) {
    console.log(input);
    return 'updated episode';
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return 'deleted episode';
  }
}
