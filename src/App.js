import React, { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/Header";

function App() {
  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) || []
   );

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
   const date = new Date();
   const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
   };
   const newNotes = [...notes, newNote];
   setNotes(newNotes)
  }
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => 
    note.id !== id);
    setNotes(newNotes);
  }
    return (
    <div className="container">
     <Header />
      <Search handleSearchNote={setSearchText}/>
     <NotesList setNotes={setNotes} notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText)
      )} 
      handleAddNote={addNote} handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
