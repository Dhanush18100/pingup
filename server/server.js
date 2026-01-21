import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

const app=express()

app.use(express.json())
app.use(cors())

const PORT=process.env.PORT || 4000

await connectDB()

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http:localhost:${PORT}`)
})