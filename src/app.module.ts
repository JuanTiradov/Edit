import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { contentModule } from './content/content.Module'; // Agrega esta línea
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jtiradoverbel06:Juan.tirado20@edit.hhfcfay.mongodb.net/' ) 
    //contentModule/,
  ],
  controllers: [AppController],
  providers: [AppService],
  })
  export class AppModule {}
  

  
