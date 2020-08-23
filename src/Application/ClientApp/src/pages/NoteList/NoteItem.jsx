import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const NoteItem = (props) => {
  const { note } = props;

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <CardContent style={{ paddingBottom: 0 }}>
        <Typography variant="h5" component="h2">
          {note.text}
        </Typography>
        <Typography color="textSecondary">
          {note.date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open details</Button>
      </CardActions>
    </Card>
  );
};
