import React, { useState } from 'react'
import typeImage from '../assets/t-1.jpeg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const ReciepeForm = ({uri}) => {
  const navigate=useNavigate()
  const [inputs,setInputs]=useState({
    title:'',
    ingrediants:'',
    procedure:'',
    img:''
  })
  const postRecipe=()=>{
    axios.post(`${uri}`,{
      title:inputs.title,
      ingredients:inputs.ingrediants,
      procedure:inputs.procedure,
      image:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    }).then(alert('Success')).then(()=>navigate('/'))
  }
  const handleChange=(e)=>{
    setInputs({
      [e.target.name]:e.target.value
  })
  }
  console.log(inputs)
  const handleSubmit=(e)=>{
    e.preventDefault()
    postRecipe()
    setInputs({})
  }
  return (
    <div>
    <div className='flex justify-between'>
        <img src={typeImage} alt='img' className='w-cs h-80 mx-4 rounded-xl object-cover'/>
      <form className='flex flex-col mx-6 text-black text-xl'>
        <input className='w-96 outline-none mx-4 border-black py-2 my-4 border-b-4 rounded-2xl' placeholder='Title' name='title' onChange={handleChange} required/>
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='Ingrediants' name='ingrediants'  onChange={handleChange} required/>
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='Procedure' name='procedure'  onChange={handleChange} required/>
        <input className='w-96 outline-none mx-4 border-black py-2 my-4  border-b-4 rounded-2xl' placeholder='Image' name='image'  onChange={handleChange} required/>

        {/* <input type='file' className='hidden' id='file-type' /> */}
        {/* <label htmlFor='file-type' className='w-96 outline-none mx-4 font-bold cursor-pointer py-2 '>Attach your image</label> */}
        <button className='p-2 bg-yellow-400 rounded-xl' onClick={handleSubmit}>Submit</button>
      </form>  
      </div>
    </div>
  )
}

const EditReciepe = ({uri,id,selectedRecipe}) => {
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
      })
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      updateReciepe()
  }
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

export default ReciepeForm
