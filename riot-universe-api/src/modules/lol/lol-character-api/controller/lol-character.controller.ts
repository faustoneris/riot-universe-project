import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LolCharactersDto } from '../dtos/lol-character.dto';
import { LolCharacterService } from "../services/lol-character.service";


@Controller('lol')
export class LolCharacterController { 
    constructor(private readonly lolCharacterService: LolCharacterService) {}

    @Get()
    async findAllCharacters(): Promise<LolCharactersDto[]> { 
        return await this.lolCharacterService.findAllCharacters(); 
    }

    @Post()
    async createCharacter(@Body() character: LolCharactersDto): Promise<void> { 
        await this.lolCharacterService.createCharacter(character); 
    }
}