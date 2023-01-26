import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LolCharacterController } from './controller/lol-character.controller';
import { CharacterRepository as LolCharacterRepository } from './repository/lol-character.repository';
import { LolCharacters, LolCharacterSchema } from './schemas/lol.schema';
import { LolCharacterService } from './services/lol-character.service';

const MODELS = MongooseModule.forFeature([
    {
      name: LolCharacters.name,
      schema: LolCharacterSchema,
    },
  ]);

@Module({
    imports: [MODELS],
    controllers: [LolCharacterController],
    providers: [LolCharacterService, LolCharacterRepository],
    exports: [LolCharacterService, LolCharacterRepository ]
})
export class LolCharacterModule {}
