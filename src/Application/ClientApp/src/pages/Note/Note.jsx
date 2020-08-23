import React from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const Note = () => {
  const { noteId } = useParams();
  return <div>
    <NavBar></NavBar>
      Note {noteId}
      <br></br>
      <TextareaAutosize  style={{border: "none", borderColor: "Transparent",  outline: "none", width: "100%"}} aria-label="empty textarea" placeholder="Napisz nową notatkę" />
    </div>;
};
