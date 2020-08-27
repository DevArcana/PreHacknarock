import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { NoteItem } from "./NoteItem";

import { NavBar } from "../../components/NavBar/NavBar";

export const NoteList = () => {
  const { user } = useAuth0();

  const [notes, setNotes] = React.useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}rest/notes?page=1&pageSize=10`
      );
      setNotes(result.data.results);
    };
    fetchData();
  }, []);

  const [newNoteTitle, setNewNoteTitle] = useState("");

  const addNewNote = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}rest/notes`,
      {
        title: newNoteTitle,
        content: "",
      }
    );
    let arr = notes;
    arr.unshift(response.data);
    setNotes(JSON.parse(JSON.stringify(arr)));
    setNewNoteTitle("");
  };

  const handleTextChange = (e) => {
    setNewNoteTitle(e.target.value);
  };

  return (
    <>
      <NavBar view="notelist" title="Notatki" />
      <Container maxWidth={"sm"}>
        <Typography>Logged as: {user.name}</Typography>
        <CreateInputBox>
          <TextField
            onChange={handleTextChange}
            value={newNoteTitle}
            style={{ float: "left" }}
            id="standard-basic"
            label="Tytuł"
          />
          <StyledButton onClick={addNewNote}>Dodaj notatkę</StyledButton>
        </CreateInputBox>
        {notes?.map((note, i) => (
          <NoteItem note={note} />
        ))}
      </Container>
    </>
  );
};

const CreateInputBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled(Button)`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #6fb1ff;
  display: inline;
  margin-top: 5px;
  font-size: 16px;
  float: left;
`;
