import bodyParser  from "body-parser";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routerUser from "./routes/routerUser.js";
import mongoose from "mongoose";
import routerRecip from "./routes/routerRecip.js";


const app=express()
dotenv.config();
app.use(cors())
app.listen(process.env.PORT,()=>{
    console.log("run!!!!!!!!! 💯")
})
app.use("/users",routerUser)
app.use("/recipes",routerRecip)
mongoose.connect('mongodb://0.0.0.0:27017/project')
.then(()=>{
    console.log("connect 👍")
})
.catch((err)=>{
    console.log(err.message)
})
///בשביל להגדיר את תקיית הpublic סטטית
app.use(express.static('public'))