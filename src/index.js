// require('dotenv').config({path:'./env'});

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { Express } from "express";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// import express from "express"
// const app = express()

dotenv.config({
    path : '.\env'
})

connectDB()

//! One Approach (Not Industry Grade)
// (async () => { 
//     try
//     {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     
//       app.on("error", (error)=>{
//         console.log("Error :", error);
//         throw error
        
//       })

//       app.listen(process.env.PORT, () =>
//       {
//         console.log(`App is listening on port ${process.env.PORT}`);
        
//       })
//     }
//     catch(error)
//     {
//         console.log("Error",error);
//         throw err
        
//     }
// })()