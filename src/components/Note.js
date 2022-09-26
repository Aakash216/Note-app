import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({ id, text, date, handleDeleteNote,setNotes }) {
    const handler = (e,id) => {
        setNotes(prevState => {
            const newState = prevState.map(obj => {
              // 👇️ if id equals 2, update country property
              if (obj.id === id) {
                return {...obj, text:e.target.value};
              }
      
              // 👇️ otherwise return object as is
              return obj;
            });
      
            return newState;
          });
    }
  return (
    <div className="note">
      <textarea className="note" 
           rows='8'
            cols='10' 
            type="text" 
            value={text} 
            onChange={(e)=>{handler(e,id)}}
            > </textarea>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icons"
          size="1.3em"
        />
      </div>
    </div>
  );
}
export default Note;
