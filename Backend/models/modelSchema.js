import mongoose, { model } from "mongoose";

const schema=mongoose.Schema;

const reciepeSchema=new schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    procedure:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})

export default mongoose.model('Reciepe',reciepeSchema)