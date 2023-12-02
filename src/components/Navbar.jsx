import React from 'react'
import './navbar.scss'
import {FaFacebookF,FaGithub,FaInstagram,} from 'react-icons/fa6'

import {motion} from 'framer-motion'
import { Sidebar } from './Sidebar';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="holder">  
            <motion.span
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}

            >KAM</motion.span>
            <div className='social'>
                <span> <a href="#"><FaFacebookF/></a> </span>
                <span><a href="#"><FaGithub/></a></span>
                <span><a href="#"><FaInstagram /></a></span>
            </div>
        </div>

    </div>
  )
}

