import React from 'react'
import ReciepeForm from './ReciepeForm'
const AddReciepe = ({uri}) => {
  return (
    <div id='add'>
      <div>
        <h1 className='font-bold text-3xl mx-96 px-20 my-4'>Add Your Own Reciepe Here !</h1>
      </div>
      <ReciepeForm uri={uri}/>
    </div>
  )
}

export default AddReciepe
