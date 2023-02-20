import express from "express";
import morgan from "morgan";
import { config } from "dotenv";
import "./config/connectionDB.js";

// Import Controllers

// Import Mildlewares

// Import Routes

config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 3000);

app.get("/", (request, response) => {
  response.status(200).json({ message: "server up" });
});

app.listen(app.get("port"), () =>
  console.log(`Server listening on port ${app.get("port")}`)
);
