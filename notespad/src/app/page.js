"use client"
import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import Note from "./components/Note";
import {  useRef, useState } from "react";

export default function Home() {
    const [notes,setNotes] = useState([]);
    const constraintsRef = useRef(null)
const addNote = () => {
    const newNote ={
        id:Date.now(),
        title:"new note",
        text:""
    };
    setNotes((prev)=>[...prev,newNote]);
}
const deleteNote =(id) =>{
    setNotes((prevNote) =>{
      return prevNote.filter((note) => note.id != id)
    })
}

  return (
   <>
   <div class="conatiner w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden gap-5 flex-wrap" ref={constraintsRef}>
    <div class="addNotes fixed top-[10%] left-[10%] translate-x-[-50%] translate-y-[-50%] w-[120px] h-12 bg-black rounded-full text-zinc-50 flex justify-center items-center cursor-pointer" onClick={addNote}><h1>Notes<i class="ri-add-line"></i></h1></div>
{
    notes.map((item,ind)=>{
        return <Note key={ind} text={item.text} title={item.title} id={item.id}  deleteNote ={deleteNote} ref={constraintsRef} />
    })
}
    <h1 className="text-[20vw] rounded-full absolute top-[70%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[1] opacity-40 text">Rupesh.</h1>
   </div>
   </>
  );
}
