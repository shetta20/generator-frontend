import React, { useState } from 'react'
import Note from './Note'

const NoteHolder = () =>{

    const [NoteList,setNoteList] = useState(['Sid Bhai','Mubeen Bhai','Ashish'])

    return(
    <div className="NoteHolder">
        {NoteList.map(item =>{
            return(<Note name={item}/>)
        })}
    </div>
)
}

export default NoteHolder;
