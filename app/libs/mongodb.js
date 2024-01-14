import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect("mongodb://127.0.0.1:27017/curd-nextjs");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;