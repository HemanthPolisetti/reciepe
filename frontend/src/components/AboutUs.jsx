import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
const AboutUs = () => {
  return (
    <div id='about'>
      <div className='w-full h-full bg-yellow-400 rounded-md '> 
        <h1 className='py-2 my-2 text-4xl font-bold mx-96 px-40'>About Us</h1>
        <span className='font-bold text-2xl mx-96 px-40'>Hemanth Polisetti</span>
        <span className='font-bold text-2xl flex mx-96 pl-52'>Aspiring fullstackwebdev</span>
        <div className='flex w-20 h-20 items-center mx-auto'>
        <a href='https://www.linkedin.com/in/hemanth-polisetti-042308171' target='_blank'><CiLinkedin  className='w-10 h-10 cursor-pointer'/></a>
        <a href='https://github.com/HemanthPolisetti' target='_blank'><FiGithub className='w-10 h-8 cursor-pointer'/></a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs