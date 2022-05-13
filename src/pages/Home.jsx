import Popular from "../component /Popular";
import Veg from "../component /Veg";
import React from 'react'
import {motion} from 'framer-motion';


function home() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >   
      <Veg/>
      <Popular/>
    </motion.div>
  )
}

export default home

// animation={{opacity: 1}}
//     initial={{opacity:0}}
//     exited={{opacity:0}}
//     transition={{opacity:0.5}}>