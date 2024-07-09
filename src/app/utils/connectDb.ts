/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from '../config';
dotenv.config();

let connection: typeof mongoose | null = null;

export const connectDB = async () => {
  try {
    if (connection) return;
console.log(config.database_url);
    connection = await mongoose.connect(config.database_url as string);
    // connection = await mongoose.connect(`mongodb+srv://los_angeles:ilPDuCAQDGD3aCLW@cluster0.ndskif7.mongodb.net/los-angles2?retryWrites=true&w=majority&appName=Cluster0`);

    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};


