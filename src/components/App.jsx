import React, { useState } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import useLocalStorage from 'use-local-storage';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id){
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="app" data-theme={theme}>
      <Header />
      <div className='theme-toggle'>
        <i onClick={switchTheme} class='fas fa-toggle-on'></i>
      </div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return ( 
          <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
        />
        );
      })}
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;