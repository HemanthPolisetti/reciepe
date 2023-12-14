import axios from 'axios'
import React ,{useEffect, useState}from 'react'
import { useNavigate } from 'react-router-dom'
import SoloReciepe from './SoloReciepe'

const EditReciepe = ({uri,id,selectedRecipe,setChangeRecipe}) => {
    const navigate=useNavigate()
    const [inputs,setInputs]=useState({
        title:selectedRecipe.title,
        ingredients:selectedRecipe.ingredients,
        procedure:selectedRecipe.procedure,
        image:selectedRecipe.image
    })
    const handelChange=(e)=>{
        setInputs((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const updateReciepe=()=>{
        axios.put(`${uri}/${id}`,{
            ...inputs
        }).then(()=>setChangeRecipe(false))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateReciepe()
    }
useEffect(() => {
  
}, [handleSubmit])

  return (
    <div className='w-full h-full bg-yellow-300 z-10'>
      <div>
            <div className='w-full flex'>
                <h1 className='mx-auto text-3xl underline font-bold my-2 p-2'>Edit Recipe</h1>
            </div>
            <div>
                <form className='flex flex-col mx-52'>
                <label htmlFor='title' className='font-bold'>Title</label>
                <input className='outline py-2 my-4 border-b-4 rounded-2xl black' name='title' onChange={handelChange}/>
                <label htmlFor='ingredients' className='font-bold'>Ingredients</label>
                <input className=' outline-none  border-black py-2 my-4 border-b-4 rounded-2xl' name='ingredients' onChange={handelChange}/>        
                <label htmlFor='ingredients' className='font-bold'>Procedure</label>
                <input className=' outline-none  border-black py-2 my-4 border-b-4 rounded-2xl' name='procedure' onChange={handelChange}/>
                <label htmlFor='ingredients' className='font-bold'>Image Link</label>
                <input className=' outline-none  border-black py-2 my-4 border-b-4 rounded-2xl' name='image' onChange={handelChange}/>
                <button className='font-bold p-2 bg-black text-yellow-300 rounded-md' onClick={handleSubmit}>Submit</button>
                
                </form>
            </div>
      </div>
    </div>
  )
}

export default EditReciepe
