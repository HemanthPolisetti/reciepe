import Reciepe from '../models/modelSchema.js'
const getAllReciepies=async(req,res)=>{
    try{
        const reciepies=await Reciepe.find()
        if(reciepies){
            res.status(201).json({message:'Success',data:reciepies})
        }
        else {
            res.status(404).json({message:'There are no recipies found still'})
        }
    }
    catch(err){
        console.log(`Error while fetching receipies${err}`)
    }
}

const addReciepies=async(req,res)=>{
    let newReciepe = req.body;
    try{
        newReciepe=new Reciepe({
            title:newReciepe.title,
            ingredients:newReciepe.ingredients,
            procedure:newReciepe.procedure,
            image:newReciepe.image
        })
        await newReciepe.save()
        res.status(200).json({message:"ok",newReciepe})
    }
    catch(err){
        throw new Error (`Error while adding recipe ${err}`)
    }
}
const updateReciepes=async(req,res)=>{
   let rec=req.body;
   console.log(rec)
   let id=req.params.id
   try{
    let reci=await Reciepe.findByIdAndUpdate(id,{
        title:rec.title,
        ingredients:rec.ingredients,
        procedure:rec.procedure,
        image:rec.image
    })
    if(reci){
        res.status(200).json({message:'Updated Successfully',updatedRecipe:reci})
    }
    else{
        res.status(501).json({message:'Cannot Update The Reciepe'})
    }
   }
   catch(err){
    throw new Error(`error cannot update ${err}`)
   }
}

const deleteReciepe=async(req,res)=>{
    const id = req.params.id
    try{
        let reci=await Reciepe.findByIdAndDelete(id)
        if(reci){
            res.status(200).json({message:`Deleted the Recipes with ID of ${id}`})
        }
        else{
            res.status(501).json({message:'Cannot Delete The Reciepe'})
        }
    }
    catch(err){
        throw new Error(`Error cannot delete ${err}`)
    }
}
const getReciepeById=async(req,res)=>{
    let id=req.params.id
    try{
        let reciepe=await Reciepe.findById(id)
        if(reciepe){
            res.status(200).json({message:'Found The Reciepe',reciepe})
        }
        else{
            res.status(404).json({message:'Doesn`t Found the Reciepe'})
        }
    }
    catch(err){
        throw new Error(`Error cannot find the reciepe ${err}`)
    }
}
export {getAllReciepies,addReciepies,updateReciepes,deleteReciepe,getReciepeById}
