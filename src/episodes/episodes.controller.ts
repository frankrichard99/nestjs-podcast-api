import { Controller, Get, Param, Post, Query, Body, Put, Delete, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {
    constructor(private episodeService: EpisodesService){}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log(sort)
        return this.episodeService.findAll(sort);
    }

    @Get(":id")
    async findOne(@Param() id: string){
        console.log(id);
        const episode = await this.episodeService.findOne(id);
        if(!episode){
            //throw new HttpException("Episode not found", HttpStatus.NOT_FOUND);
            throw new NotFoundException("Episode not found");
        }
    }

    @Post()
    create(@Body() input: any){
        console.log(input);
        return this.episodeService.create(input);
    }

    @Get("featured")
    findFeatured(){
        return this.episodeService.findFeatured();
    }

    @Put(":id")
    update(@Body() input: any, @Param() id: string){
        console.log(input);
        return "updated episode"
    }

    @Delete(":id")
    delete(@Param() id: string){
        return "deleted episode";
    }
}
