
"use client"
import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import Note from "./components/Note";
import {  useRef, useState } from "react";
import { motion } from "framer-motion"
export default function Home() {
    const [notes,setNotes] = useState([]);
    const constraintsRef = useRef(null);
    const inputColor = useRef();
const addNote = () => {
    const newNote ={
        id:Date.now(),
        title:"new note",
        text:"something write here",
        color:inputColor.current.value
    };
    console.log(notes.color);
    setNotes((prev)=>[...prev,newNote]);
}
const deleteNote =(id) =>{
    // setNotes((prevNote) =>{
    //   return prevNote.filter((note) => note.id !== id)
    // })
    const updateNote = notes.filter((elem)=>{
        return id !== elem.id;
    });
    setNotes(updateNote);
}


  return (
   <>
   <div class="conatiner w-[100vw] h-[100vh] flex justify-center items-center  gap-5 flex-wrap overflow-hidden" ref={constraintsRef}>
    <div class="addNotes fixed top-[10%] left-[80px] translate-x-[-50%] translate-y-[-50%] w-[120px] h-12 bg-black rounded-full text-zinc-50 flex justify-center items-center cursor-pointer z-20" onClick={addNote}><h1>Notes<i class="ri-add-line"></i></h1></div>
    <div className=" fixed top-[20%] left-[85px]  translate-x-[-50%] translate-y-[-50%] flex color p-3 rounded-2xl">
        <h2>Pick color </h2>
      <input type="color" ref={inputColor} />
    </div>

{
    notes.map((item,ind)=>{
        return <Note key={ind} text={item.text} title={item.title} id={item.id}  deleteNote ={deleteNote} color={item.color} ref={constraintsRef} />
    })
}
    <h1 className="text-[20vw] rounded-full absolute top-[70%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[-1] opacity-40 text">Rupesh.</h1>
   </div>
   </>
  );
}
