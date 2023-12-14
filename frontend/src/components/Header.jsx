import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <motion.div initial={{x:-100}} animate={{x:0}} transition={{delay:0.2 , duration:1}}>
            <ul className='flex items-center w-cs h-full mx-2 justify-around font-bold underline'>
              <a href='#'> <li className='my-2 mx-2 cursor-pointer' >Home</li></a>
              <li className='my-2 mx-2 cursor-pointer'><Link to='hero' span={true} smooth={true}>Reciepes</Link></li>
                <li className='my-2 mx-2 cursor-pointer'><Link to='add'span={true} smooth={true}>Add Reciepe</Link></li>
                <li className='my-2 mx-2 mr-6 cursor-pointer'><Link to='about' span={true} smooth={true}>About</Link></li>
            </ul>
        </motion.div>
    )
}

export default Header
