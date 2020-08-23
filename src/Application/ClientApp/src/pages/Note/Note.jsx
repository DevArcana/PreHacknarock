import React from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";

export const Note = () => {
  const { noteId } = useParams();
  return <div>
    <NavBar></NavBar>
    Note {noteId}
    </div>;
};
