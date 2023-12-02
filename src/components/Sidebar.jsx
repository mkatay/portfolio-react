import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import './sidebar.scss'
import { useState } from "react";
import {motion} from 'framer-motion'

const sidebarVariants = {
  open: {
    width: '150px',
    transition: {
      type:'spring',
      stiffness:50
    },
  },
  closed: {
    width: '50px',
    transition: {
      delay:0.3,
      type:'spring',
      
    },
  },
};
const buttonVariants = {
  open: {
    rotate: 0,
    transition: {
      type: 'spring',
      
    }
  },
  closed: {
    rotate: 180,
    transition: {
      type: 'spring',
      
    }
  },
};
const menu=['Home','About','Portfolio']

export const Sidebar = () => {
    const [open,setOpen]=useState(false)
   
  return (
    <motion.div className="sidebar" 
    animate={open ? 'open' : 'closed'}
   
    >
      <motion.button onClick={()=>setOpen(prev=>!prev)} variants={buttonVariants} >
       {!open?  <GiHamburgerMenu /> :  <IoClose />}
      </motion.button>
    {open &&  <motion.div  variants={sidebarVariants} className="bg">
       {menu.map(name=>
        <motion.a whileHover={{borderLeft:'2px dotted gray'}} key={name}
        href={`#${name}`}
          onClick={()=>setOpen(prev=>!prev)} 
          >{name}</motion.a>)}
      </motion.div>}
    </motion.div>
  );
};
