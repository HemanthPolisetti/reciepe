import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import EditReciepe from './EditReciepe';

const SoloReciepe = ({uri}) => {
    const navigate=useNavigate()
    const { id } = useParams();
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [changeRecipe,setChangeRecipe]=useState(false)
    const fetchRecipe = async () => {
        const res = await axios.get(`${uri}/${id}`);
        const data = res.data.reciepe;
        setSelectedRecipe(data);
    };
    const handleEdit=(e)=>{
        e.preventDefault()
        setChangeRecipe(true)

    }
    useEffect(() => {
        fetchRecipe();
    }, []);
    return (
        <div className='bg-yellow-300 w-full h-full'>
            {selectedRecipe && (
                changeRecipe ? <EditReciepe uri={uri} id={id} selectedRecipe={selectedRecipe} setChangeRecipe={setChangeRecipe} changeRecipe={changeRecipe}/>:
                <div>
                  <div className='flex w-full items-center justify-between'>
                    <h1 className='text-4xl mx-auto underline capitalize font-bold my-2'>{selectedRecipe.title}</h1>
                    <button className='font-bold p-2 bg-black text-yellow-300 rounded-md' onClick={handleEdit}>Edit</button>
                    <button className='font-bold mx-5 p-2 bg-black text-yellow-300 rounded-md' onClick={()=>navigate('/')}>Home</button>
                    </div>
                    {/* Render other details of the selected recipe */}
                    <div className='m-4 p-4'>
                      <img src={selectedRecipe.image} alt='reciepe' className=' w-52 h-52 rounded-md mx-96 object-cover'/>
                      <ul><li className='font-semibold mx-6 my-4 capitalize'>Ingredients : {selectedRecipe.ingredients}</li></ul>
                      <p className='font-semibold mx-6 my-2'>Procedure: {selectedRecipe.procedure}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
export default SoloReciepe