import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Box, Container } from "@material-ui/core";

export const Note = () => {
  const { noteId } = useParams();

  const [note, setNote] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}rest/notes/` + noteId
      );
      setNote(result.data);
    };

    fetchData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar title={note.title} />
      <Container maxWidth={"sm"}>
        <Box mt={3}>
          <TextareaAutosize
            style={{
              border: "none",
              borderColor: "Transparent",
              outline: "none",
              width: "100%",
            }}
            aria-label="empty textarea"
            placeholder="Napisz nową notatkę"
            defaultValue={note.content}
          />
        </Box>
      </Container>
    </>
  );
};
