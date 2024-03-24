import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

//: INPLEMENTED CACHE
let cached: MongooseConnection = (global as any).mongoose;

//: VERIFY AND CREATE CACHE IF NOT EXIST
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null
  };
};