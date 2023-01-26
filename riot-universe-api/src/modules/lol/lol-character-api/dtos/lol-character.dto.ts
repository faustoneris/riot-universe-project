import { CharacterSkills } from "./lol-character-skills.dto"
import { CharacterSkins } from "./lol-character-skins.dto"

export type LolCharactersDto = { 
    name: string, 
    lore: string, 
    characterSkins: CharacterSkins[], 
    characterSkills: CharacterSkills
}