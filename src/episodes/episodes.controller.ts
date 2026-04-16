import { Controller, Get, Param, Post, Query, Body, Put, Delete } from '@nestjs/common';
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
    findOne(@Param() id: string){
        console.log(id);
        return this.episodeService.findOne(id);
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
