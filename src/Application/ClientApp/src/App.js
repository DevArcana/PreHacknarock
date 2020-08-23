import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NoteList } from "./pages/NoteList/NoteList";
import { Login } from "./pages/Login/Login";
import { Note } from "./pages/Note/Note";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/note/:noteId">
          <Note />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <NoteList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
