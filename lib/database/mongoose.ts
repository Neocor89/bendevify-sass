import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

//* First Step
//: INPLEMENTED CACHE DATABASE
let cached: MongooseConnection = (global as any).mongoose;

//: VERIFY AND CREATE CACHE IF NOT EXIST
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null
  };
};

//: VERIFY OR CREATE DATABASE CONNECTION
export const connectToDatabase = async () => {

  //: CHECK AND RETURN THE CONNECTION
  if (cached.conn) return cached.conn;

  //: VERIFIED IF THE CACHE OF MONGODB URL EXIST 
  if (!MONGODB_URL) throw new Error("Your MongoDB URL is missing");

  //: CREATE NEW CACHE PROMISE IF NOT EXIST
  cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
    dbName: "bendevify", bufferCommands: false,
  });

  //: CREATE THE CONNECTION
  cached.conn = await cached.promise;

  //: SEND THE CONNECTION TO THE DATABASE
  return cached.conn;
};