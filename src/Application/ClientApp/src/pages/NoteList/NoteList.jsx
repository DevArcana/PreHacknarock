import React from "react";
import { NoteItem } from "./NoteItem";

export const NoteList = () => {
  const notes = [
    { text: "Note1", date: "Date1" },
    { text: "Note2", date: "Date2" },
    { text: "Note3", date: "Date3" },
  ];
  return (
    <>
      {notes.map((note) => (
        <div>
          <NoteItem note={note} />
        </div>
      ))}
    </>
  );
};
