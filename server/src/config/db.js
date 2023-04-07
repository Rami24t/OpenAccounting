import mongoose from "mongoose";
import { config } from "dotenv";

config();

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log("MongoDB ");
    switch (mongoose.connection.readyState) {
      case 0:
        console.log("Disconnected");
        break;
      case 1:
        console.log("Connected");
        break;
      case 2:
        console.log("Connecting");
        break;
      case 3:
        console.log("Disconnecting");
        break;
      default:
        console.log("Unknown");
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
