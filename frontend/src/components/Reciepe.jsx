import React from 'react'
import ReciepeCard from './ReciepeCard'

const Reciepe = ({uri}) => {
  return (
    <div id='hero'>
      <div>
        <h1 className='text-4xl font-bold px-24 mx-96 py-4 my-4'>Recipies over here</h1>
      </div>
      <ReciepeCard uri={uri}/>
    </div>
  )
}

export default Reciepe
