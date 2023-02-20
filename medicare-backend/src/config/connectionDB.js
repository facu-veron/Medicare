import mongoose from "mongoose";
import { connect } from "mongoose";
import { config } from "dotenv";

config();

mongoose.set("strictQuery", true);
const connection = await connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME,
})
  .then(() => console.log("server connected to the database"))
  .catch((e) => console.log("Error connecting server to database: ", e));

export default connection;
