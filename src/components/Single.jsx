import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./single.scss";

export const Single = ({ id, title, photo, descr }) => {

  const controls = useAnimation();
  const {ref, inView}= useInView();

  // Ha a progressBar láthatóvá válik, indítsd el az animációt
useEffect(() => {
  inView &&   controls.start({ x: 0, width: "100%" });
}, [inView]);

  console.log("InView:", inView,controls);

  return (
    <div className="single">
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div
          className="progressBar"
          ref={ref}
          initial={{ x: "0", width: "0"  }}
          animate={controls}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      <div className="holder">
        <div className="img-holder">
          <img src={photo} alt={title} />
        </div>
        <div className="text-holder">
          <h3>{title}</h3>
          <p>{descr}</p>
          <button>see demo</button>
        </div>
      </div>
    </div>
  );
};
