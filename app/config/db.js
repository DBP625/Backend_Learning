import { Mongoose_Connection } from "./config";

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(Mongoose_Connection);
    console.log("Mongo Vaia Connected Successfully");
  } catch (error) {
    console.log("Mongo Vaia failed", error);
  }
};
