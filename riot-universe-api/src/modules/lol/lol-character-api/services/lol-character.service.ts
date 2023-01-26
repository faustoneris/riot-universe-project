import { Injectable } from "@nestjs/common";
import { LolCharactersDto } from "../dtos/lol-character.dto";
import { CharacterRepository } from "../repository/lol-character.repository";
import { LolCharacters } from "../schemas/lol.schema";


@Injectable()
export class LolCharacterService { 
    
    constructor(private readonly characterRepository: CharacterRepository) {}

    async findAllCharacters(): Promise<LolCharactersDto[]> { 
        return await this.characterRepository.findAllCharacters(); 
    }

    async createCharacter(character: LolCharactersDto): Promise<void> {
        this.Validate(character); 
        return await this.characterRepository.createCharacter(character); 
    }

    private Validate(character: LolCharactersDto): void {         
        if (!character) { 
            throw new Error("Preencha os dados antes de salvar o personagem."); 
        }

        const { name, lore, characterSkills, characterSkins } =  character; 


        if (!name) { 
            throw new Error(`Nome do personagem é obrigátorio.`); 
        }

        if (!lore) {
            throw new Error(`Lore do personagem ${name} é obrigátoria.`); 
        }

        if (!characterSkills) { 
            throw new Error(`Hablidades do personagem são obrigátorios.`); 
        }

        if (!characterSkills.passive) { 
            throw new Error(`Passiva do personagem é obrigátoria.`); 
        } 

        if (!characterSkills.q) { 
            throw new Error(`Hablidade Q do personagem é obrigátoria.`); 
        } 

        if (!characterSkills.w) { 
            throw new Error(`Hablidade W do personagem é obrigátoria.`); 
        } 

        if (!characterSkills.e) { 
            throw new Error(`Hablidade E do personagem é obrigátoria.`); 
        } 

        if (!characterSkills.r) { 
            throw new Error(`Hablidade R do personagem é obrigátoria.`); 
        } 
        
    }
}