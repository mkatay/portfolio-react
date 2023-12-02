import React from "react";
import "./hero.scss";
import tablokep from "../assets/tablokep.png";
import { CgScrollV } from "react-icons/cg";
import {motion} from 'framer-motion'
import { easeInOut } from "framer-motion";

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
        
        }
    },
   
}
const scrollBtnVariants={
    initial:{
        opacity:0,
        y:0,
    },
    animate:{
        opacity:1,
        y:5,
        transition:{
            duration:3,
            repeat:Infinity,
            ease: "linear",
            delay: 2,
        }
    }
}
export const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="holder" variants={textVariants} initial={'initial'} animate={'animate'}>
        <div className="text-container" >
          <h2>M.Kátay</h2>
          <h1>Be the Creator and Explorer of the Web World!</h1>
        </div>
        <div className="buttons" >
          <button>Projects</button>
          <button>Contact Me</button>

      
        <motion.button className="scroll-button" variants={scrollBtnVariants} initial={'initial'} animate={'animate'}>
             <CgScrollV />
        </motion.button>
         </div>
      </motion.div>
      
      <motion.div className="img-container" initial={{opacity:0}} animate={{opacity:1,transition:{duration:2}}}>
        <img src={tablokep} alt="tablokep" />    
      </motion.div> 
      <div className="back-text">Teacher</div>
    </div>
  );
};
