import React, { useState, useEffect } from "react";
import axios from 'axios';

import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const Note = () => {

  const { noteId } = useParams();

  const [note, setNote] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://pre-hacknarock.herokuapp.com/api/rest/notes/'+noteId,
      );
      setNote(result.data);
    };
 
    fetchData();
  }, []);

  
  return <div>
    <NavBar title={note.title}></NavBar>
      <br></br>
      <TextareaAutosize  style={{border: "none", borderColor: "Transparent",  outline: "none", width: "100%"}} aria-label="empty textarea" placeholder="Napisz nową notatkę" defaultValue={note.content}/>
    </div>;
};
