import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { LolHerosDto } from "../dtos/lol-character.dto";
import { LolHero } from "../schemas/lol.schema";



@Injectable()
export class CharacterRepository {
    constructor(@InjectModel(LolHero.name) private lolModel: Model<LolHero>) { }

    async fetchAllHeros(): Promise<LolHerosDto[]> {
        return await this.lolModel.find();
    }

    async findHeroByName(name: string): Promise<LolHerosDto> {
        return await this.lolModel.findOne(
            { name: name.toLowerCase() },
            {
                name: 1,
                lore: 1,
                characterSkins: 1,
                characterSkills: 1
            });
    }

    async createHero(hero: LolHerosDto): Promise<LolHero> {
        const formattedHero = this.formatHeroBeforeSave(hero); 
        const heroModel = new this.lolModel(formattedHero); 
        if (!heroModel) {
            throw new Error("Erro ao criar novo heroi.");
        }
    
        return heroModel.save();
    }

    private formatHeroBeforeSave(hero: LolHerosDto): LolHerosDto { 
        if (hero) {
            let { name } = hero; 
            name = name.toLowerCase(); 
            return hero; 
        }
    }
}