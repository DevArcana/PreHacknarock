import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NoteItem } from "./NoteItem";
import { NavBar } from "../../components/NavBar/NavBar";
import './NoteList.css'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';


export const NoteList = () => {

  let history = useHistory();

  const [notes, setNotes] = React.useState([
    { text: "Note1", date: "Date1" },
    { text: "Note2", date: "Date2" },
    { text: "Note3", date: "Date3" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://pre-hacknarock.herokuapp.com/api/rest/notes?page=1&pageSize=10',
      );
      setNotes(result.data.results);
    };
 
    fetchData();
  }, []);

  const handleNewNote = async () => {
    history.push()
  }
  const [newNoteTitle, setNewNoteTitle] = useState("");

  const addNewNote = async () => {
    const response = await axios.post('http://pre-hacknarock.herokuapp.com/api/rest/notes', {title: newNoteTitle, content: ""})
    let arr = notes
    arr.unshift(response.data);
    console.log(arr)
    setNotes(JSON.parse(JSON.stringify(arr)))
    setNewNoteTitle("")

  }

 

  const handleTextChange = (e) => {
    setNewNoteTitle(e.target.value)
  }
  return (
    <>
      <NavBar view="notelist" title="Notatki"></NavBar>
      
      <div className="noteList">
        <TextField onChange={handleTextChange} value={newNoteTitle} style={{float: "left"}} id="standard-basic" label="Tytuł" />
        <br></br>
        <button onClick={addNewNote}>Dodaj notatkę</button>
        <br></br>
        <br></br>
        <br></br>

        {notes.map((note, i) => (
          <div key={i}>
            <NoteItem note={note} />
          </div>
        ))}
      </div>
    </>
  );
};
