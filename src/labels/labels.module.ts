import { Module } from '@nestjs/common';
import { labelsController } from './labels.controller';
import { labelsService } from './labels.service';

@Module({
  controllers: [labelsController],
  providers: [labelsService]
})
export class labelsModule {}
