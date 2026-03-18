import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import cors from "cors";
import dbConnect from "./config/dbConnection.js";
import authRouter from "./routes/authRoute.js";

const app = express();
dbConnect();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

const Port = process.env.PORT || 3000;

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(Port, () => {
  console.log("server is running on the port :", Port);
});
