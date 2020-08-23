import React from "react";

export const NoteItem = (props) => {
  const { note } = props;
  return (
    <>
      {note.text}
      {note.date}
    </>
  );
};
