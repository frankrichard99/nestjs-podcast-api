import { Controller, Get, Param, Post, Query, Body, Put, Delete } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
        console.log(sort)
        return "all episodes"
    }

    @Get(":id")
    findOne(@Param() id: string){
        console.log(id);
        return "one episode";
    }

    @Post()
    create(@Body() input: any){
        console.log(input);
        return "new episodes"
    }

    @Get("featured")
    findFeatured(){
        return "featured episodes"
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
