import React from 'react'
import { motion } from 'framer-motion'
import img1 from '../assets/bg1.jpg'
import img2 from '../assets/main.jpg'
import img3 from '../assets/r-1.jpg'
import img4 from '../assets/r-2.jpg'
import img5 from '../assets/r-3.jpg'
import img6 from '../assets/r-4.jpg'
import img7 from '../assets/r-5.jpg'
import Header from './Header'

const Homepage = () => {
  return (
    <div className='relative capitalize'>
            <div className='flex justify-between items-center bg-yellow-300'>
            <div className='absolute top-10'>
            <Header />
            </div>
            <motion.div className='font-extrabold text-2xl' initial={{x:-100}} animate={{x:0}} transition={{delay:0.2 , duration:1}}>
            <div className='mx-10 text-6xl'>Recyipee</div>
            <div className='mx-16 my-4'>Explore different tastes of the world!</div>
            </motion.div>            
            < motion.div initial={{x:100}} animate={{x:0}} transition={{delay:0.2 , duration:1}}>
            <img src={img1} className='w-cs rounded-2xl' alt='main'/>
            </motion.div>
            </div>
            
            <motion.div className='w-cs bg-yellow-300 h-20  rounded-md absolute mx-sc overflow-x-hidden' initial={{x:-100}} animate={{x:0}} transition={{delay:0.2 , duration:1}}>
            {/* <div className='text-2xl mx-52 mt-4 font-bold'>SCROLL DOWN </div> */}
            </motion.div>
            <div className='flex mt-1  mx-20'>
            <motion.div className='w-16 h-16 bg-yellow-300 rounded-full'initial={{x:-100,rotateY:0}} animate={{x:0,rotateY:360}} transition={{delay:0.5 , duration:1}}></motion.div>
            <motion.div className='w-16 h-16 bg-yellow-300 rounded-full mx-64'initial={{x:-100,rotateY:0}} animate={{x:0, rotateY:360}} transition={{delay:0.5 , duration:1}}></motion.div>
            </div>

    </div>
  )
}

export default Homepage
