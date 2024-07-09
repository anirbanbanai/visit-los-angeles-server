import mongoose, { Schema } from 'mongoose';
import { ITown } from './town.interface';

const townSchema: Schema<ITown> = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  map_image: {
    type: String,
  },
  town_image: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  video_link: {
    type: String,
  },
});

export const Town = mongoose.model<ITown>('town', townSchema);
