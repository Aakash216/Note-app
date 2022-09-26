import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NotesList({notes, handleAddNote, handleDeleteNote, handleUpdateNote, setNotes}){
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note key={note.id} id={note.id} text={note.text} date={note.date}
                  setNotes={setNotes}
                handleDeleteNote={handleDeleteNote}
                handleUpdateNote={handleUpdateNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;