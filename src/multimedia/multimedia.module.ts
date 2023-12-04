import { Module } from '@nestjs/common';
import { multimediaController } from './multimedia.controller';
import { multimediaService } from './multimedia.service';

@Module({
  controllers: [multimediaController],
  providers: [multimediaService]
})
export class multimediaModule {}
