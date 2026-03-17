import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); 
import cors from "cors"
import dbConnect from "./config/dbConnection.js";


const app=express();
dbConnect();

app.use(cors());
app.use(express.json());

const Port=process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(Port,()=>{
    console.log("server is running on the port :" , Port);
})