import { Module } from '@nestjs/common';
import { filesController } from './files.controller';
import { filesService } from './files.service';

@Module({
  controllers: [filesController],
  providers: [filesService]
})
export class filesModule {}
