import React from "react";
import { useParams } from "react-router-dom";

export const Note = () => {
  const { noteId } = useParams();
  return <div>Note {noteId}</div>;
};
