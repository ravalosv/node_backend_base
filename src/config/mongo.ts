import "dotenv/config";
import { connect } from "mongoose";

//const NODE_ENV = process.env.NODE_ENV || "development";

async function dbConnect() {
  try {
    const DB_URI = <string>process.env.DB_URI;

    console.log(`Connecting to MongoDB...`);

    await connect(DB_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default dbConnect;
