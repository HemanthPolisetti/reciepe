import React from 'react'
import Reciepe from './Reciepe'
import Homepage from './Homepage'
import AddReciepe from './AddReciepe'
import AboutUs from './AboutUs'
const Hero = ({uri}) => {
  return (
    <div>
        <Homepage />
        <Reciepe uri={uri}/>
        <AddReciepe uri={uri}/>
        <AboutUs />
    </div>
  )
}

export default Hero
