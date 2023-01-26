import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { CharacterSkills } from "../dtos/lol-character-skills.dto";
import { CharacterSkins } from "../dtos/lol-character-skins.dto";

@Schema() 
export class LolCharacters extends Document { 
    @Prop()
    name: string

    @Prop()
    lore: string

    @Prop()
    characterSkins: CharacterSkins[]

    @Prop()
    characterSkills: CharacterSkills
}

export const LolCharacterSchema = SchemaFactory.createForClass(LolCharacters);

 
