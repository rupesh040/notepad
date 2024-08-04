import React, { useRef } from 'react'
import { motion } from "framer-motion"
const Note = ({text,id,deleteNote,title, color,ref}) => {
    console.log(color);
  return (
    <motion.div className="noteCard z-30 w-[300px] h-[300px]  p-3 rounded-2xl overflow-hidden absolute
    top-[20%] left-[10%] border-t-8 "    drag
    dragConstraints={ref} style={{borderColor:color }}>
        <div className="top flex justify-between items-center pb-1 ">
        <input type="text" className='text-black font-bold capitalize text-[20px] w-[80%] outline-none bg-transparent'  placeholder='Title...' defaultValue={title}/>
        <i class="ri-close-fill text-[20px] cursor-pointer" onClick={()=>{
            deleteNote(id)
        }}></i>
        </div>

        <textarea name="" id="" className='bg-transparent text-black  w-[100%] h-[85%] outline-none pt-2' placeholder='Write here description' defaultValue={text}></textarea>
    </motion.div>
  )
}

export default Note
