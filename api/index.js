import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log( "Connected to the DB.");
})
.catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})

//vichu1722000smart
// IC74zH8opz098YtK