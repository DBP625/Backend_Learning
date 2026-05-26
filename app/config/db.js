import { Mongoose_Connection } from "./config.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(Mongoose_Connection);
    console.log("Mongo Vaia Connected Successfully");
  } catch (error) {
    console.log("Mongo Vaia failed", error);
  }
};

export default connectDB;
