import React from 'react'
const Note = () => {
  return (
    <div className="noteCard z-30 w-[300px] h-[300px]  p-3 rounded-2xl overflow-hidden" >
        <div className="top flex justify-between items-center pb-1 ">
        <input type="text" className='text-black text-[20px] w-[80%] outline-none bg-transparent' autoFocus placeholder='Title...'/>
        <i class="ri-close-fill text-[20px] cursor-pointer" ></i>
        </div>

        <textarea name="" id="" className='bg-transparent text-black  w-[100%] h-[85%] outline-none pt-2' placeholder='Write here description'></textarea>
    </div>
  )
}

export default Note
