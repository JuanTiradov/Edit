import { Module } from '@nestjs/common';
import { contentController } from './content.controller';
import { contentService } from './content.service';
import { MongooseModule } from '@nestjs/mongoose';
import { contentschema } from './schema/content.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'content', schema: contentschema }])],
  controllers: [contentController],
  providers: [contentService],
})
export class contentModule {}