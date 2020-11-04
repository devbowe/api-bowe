import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

const { model } = mongoose;

export interface ICustomer extends Document {
  name: string;
  email: string;
  message: string;
  phone: string;
  challenges: ObjectId;
}

const CustomerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  rdStationId: { type: String, required: false },
  createAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'customer' });

export default model<ICustomer>('Customer', CustomerSchema);
