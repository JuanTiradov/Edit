import { Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

export interface content extends Document{
    title: string;
    artist: string;
    duration: number;
}
    @Schema({timestamps:true})
    export class content extends Document{
        @Prop({ require: true})
        title: string;

        @Prop({ require: true})
        artist: string;

        @Prop({ require: true})
        duration:number;

        }
    export const contentschema= SchemaFactory.createForClass(content);