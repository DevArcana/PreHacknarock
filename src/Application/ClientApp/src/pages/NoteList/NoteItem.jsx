import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './NoteItem.css'
import { useHistory } from "react-router-dom";


export const NoteItem = (props) => {
  const { note } = props;

  let history = useHistory();


  const handleClick = () => {
    history.push('/note/'+note.id)
  }

  return (
    <Card className="noteItem" onClick={handleClick}  style={{ marginBottom: "1rem" , cursor: "pointer"}}>
      <CardContent style={{ paddingBottom: 0 }}>
        <Typography variant="h5" component="h2">
          {note.title}
        </Typography>
        <Typography color="textSecondary">
          {note.createdAt}
        </Typography>
      </CardContent>
    </Card>
  );
};
