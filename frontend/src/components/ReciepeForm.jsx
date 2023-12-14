import React, { useState } from 'react'
import typeImage from '../assets/t-1.jpeg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const ReciepeForm = ({uri}) => {
  const navigate=useNavigate()
  const [recipeTitle,setRecipeTitle]=useState('')
  const [recipeIngredients,setRecipeIngrdients]=useState('')
  const [recipeProcedure,setRecipeProcedure]=useState('')
  const [recipeImg,setRecipeImg]=useState('')

  const postRecipe=async()=>{
    await axios.post(`${uri}`,{
      title:recipeTitle,
      ingredients:recipeIngredients,
      procedure:recipeProcedure,
      image:recipeImg
    }).then(alert('Success')).then(()=>navigate('/'))
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    postRecipe()
  }
  return (
    <div>
    <div className='flex justify-between'>
        <img src={typeImage} alt='img' className='w-cs h-80 mx-4 rounded-xl object-cover'/>
      <form className='flex flex-col mx-6 text-black text-xl'>
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='Title' name='title'  onChange={e=>setRecipeTitle(e.target.value)} required />
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='Ingredients' name='ingredients'  onChange={e=>setRecipeIngrdients(e.target.value)} required />
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='Procedure' name='procedure'  onChange={e=>setRecipeProcedure(e.target.value)} required />
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='image' name='image'  onChange={((e)=>setRecipeImg(e.target.value))} required />

        <button className='p-2 bg-yellow-400 rounded-xl' onClick={handleSubmit}>Submit</button>
      </form>  
      </div>
    </div>
  )
}
export default ReciepeForm;