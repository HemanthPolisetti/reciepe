import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routers/reciepeRouter.js';
import connectDB from './db/connectDB.js';

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/',router)
connectDB(process.env.MONGO_URI)
app.listen(process.env.PORT,(
    console.log(`Server is running on port ${process.env.PORT}`)
    
))