import React from "react";
import {Card, CardContent, Typography} from '@material-ui/core';
import './NoteItem.css'
import {useHistory} from "react-router-dom";
import {parseISO, format} from 'date-fns'

export const NoteItem = (props) => {
  const { note } = props;
  const history = useHistory();
  const createdAt = format(parseISO(note.createdAt), "dd/MM' 'HH:mm:ss")
  const handleClick = () => {
    history.push('/note/'+note.id)
  }

  return (
    <Card className="noteItem" onClick={handleClick}  style={{ marginBottom: "1rem" , cursor: "pointer", minHeight: '5rem'}}>
      <CardContent style={{ paddingBottom: 0 }}>
        <Typography variant="h5" component="h2">
          {note.title}
        </Typography>
        <Typography color="textSecondary">
          {'Last edit at: ' + createdAt}
        </Typography>
      </CardContent>
    </Card>
  );
};
