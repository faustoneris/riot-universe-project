import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { LolCharactersDto } from "../dtos/lol-character.dto";
import { LolCharacters } from "../schemas/lol.schema";



@Injectable()
export class CharacterRepository { 
    constructor(@InjectModel(LolCharacters.name) private lolModel: Model<LolCharacters>) {}

    async findAllCharacters(): Promise<LolCharactersDto[]> { 
        return await this.lolModel.find(); 
    }

    async createCharacter(character: LolCharactersDto): Promise<void> { 
        const newCharacter = new this.lolModel(character); 
        newCharacter.save(); 
    }
}