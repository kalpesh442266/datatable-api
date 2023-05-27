import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Farmers extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, unique: true })
  UniqueRegNumber: string;

  @Prop({ required: true })
  landOwned: number;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true, unique: true })
  mobileNumber: string;
}

export const FarmerSchema = SchemaFactory.createForClass(Farmers);
