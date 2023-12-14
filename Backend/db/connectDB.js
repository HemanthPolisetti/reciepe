import mongoose from "mongoose";

const connectDB=(uri)=>{
    try{
        const conn=mongoose.connect(uri)
        console.log('connected to Mongodb Successfully')
    }
    catch(err){
        console.log('error cannot connect to the mongoose')
    }
}

export default connectDB;