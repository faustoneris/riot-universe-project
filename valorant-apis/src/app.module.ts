import { ValorantCharacterApiModule } from './modules/valorant-character-api/valorant-character-api.module';
import { Module } from '@nestjs/common';
require('dotenv').config();
import { ValorantController } from './modules/valorant-character-api/controllers/valorant.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ValorantCharacterApiModule,
    MongooseModule.forRoot(`${process.env.MONGO_URI}`)
  ],
  controllers: [ValorantController],
  providers: [],
})
export class AppModule { }
