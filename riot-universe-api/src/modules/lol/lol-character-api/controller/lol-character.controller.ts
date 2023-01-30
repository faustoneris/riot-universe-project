import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LolHerosDto } from '../dtos/lol-character.dto';
import { LolCharacterService } from "../services/lol-character.service";


@Controller('lol')
export class LolCharacterController { 
    constructor(private readonly lolCharacterService: LolCharacterService) {}

    @Get()
    async fetchAllHeros(): Promise<LolHerosDto[]> { 
        return await this.lolCharacterService.findAllCharacters(); 
    }

    @Get(":name")
    async findHeroByName(@Param('name') name: string): Promise<LolHerosDto> {
        return await this.lolCharacterService.findHeroByName(name); 
    }

    @Post()
    async createHero(@Body() character: LolHerosDto): Promise<LolHerosDto> { 
       return await this.lolCharacterService.createHero(character); 
    }
}