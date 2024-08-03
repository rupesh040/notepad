"use client"
import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import Note from "./components/Note";
import { useEffect, useState } from "react";
import { stringify } from "postcss";

export default function Home() {
    const [note,setNote]=useState([]);
    useEffect(()=>{
        const saveNote = localStorage.getItem('note');
        if(saveNote){
            setNote(JSON.parse(saveNote));
        }
    },[])

    // useEffect(()=>{
    //     localStorage.setItem('note',JSON,stringify(note));
    // },[note]);
    const addNote=()=>{
        const newNote ={id:Date.now()};
        setNote([...note,newNote]);
    }
    const deleteNote =(id)=>{
        setNote(note.filter(notes=>notes.id!==id));
    };
  return (
   <>
   <div class="conatiner w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden">
    <div class="addNotes fixed top-[10%] left-[10%] translate-x-[-50%] translate-y-[-50%] w-[120px] h-12 bg-black rounded-full text-zinc-50 flex justify-center items-center cursor-pointer" onClick={addNote}><h1>Notes<i class="ri-add-line"></i></h1></div>
 {
    note.map((not,ind)=>{
        <Note key={note.id} number={ind+1}/>
    })
 }
    <h1 className="text-[20vw] rounded-full absolute top-[70%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[1] opacity-40 text">Rupesh.</h1>
   </div>
   </>
  );
}
