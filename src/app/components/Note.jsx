import React, { useRef } from 'react'
import { motion } from "framer-motion"
const Note = ({text,id,deleteNote,title,constraintsRef}) => {
  return (
    <motion.div className="noteCard z-30 w-[300px] h-[300px]  p-3 rounded-2xl overflow-hidden"  drag
    dragConstraints={constraintsRef}>
        <div className="top flex justify-between items-center pb-1 ">
        <input type="text" className='text-black font-bold capitalize text-[20px] w-[80%] outline-none bg-transparent' autoFocus placeholder='Title...' defaultValue={title}/>
        <i class="ri-close-fill text-[20px] cursor-pointer" onClick={()=>{
            deleteNote(id)
        }}></i>
        </div>

        <textarea name="" id="" className='bg-transparent text-black  w-[100%] h-[85%] outline-none pt-2' placeholder='Write here description' defaultValue={id}></textarea>
    </motion.div>
  )
}

export default Note
