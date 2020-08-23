import React from "react";
import { NoteItem } from "./NoteItem";
import { NavBar } from "../../components/NavBar/NavBar";

export const NoteList = () => {
  const notes = [
    { text: "Note1", date: "Date1" },
    { text: "Note2", date: "Date2" },
    { text: "Note3", date: "Date3" },
  ];
  return (
    <>
      <NavBar view="notelist" title="Notatki"></NavBar>
      {notes.map((note) => (
        <div>
          <NoteItem note={note} />
        </div>
      ))}
    </>
  );
};
