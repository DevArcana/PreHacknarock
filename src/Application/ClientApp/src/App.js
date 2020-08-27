import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NoteList } from "./pages/NoteList/NoteList";
import { Note } from "./pages/Note/Note";
import { Loading } from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <Error error={error} />;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Switch>
      {/*<Route path="/login" component={Login} />*/}
      {/*<PrivateRoute*/}
      {/*  path="/note/:noteId"*/}
      {/*  component={Note}*/}
      {/*  isAuthenticated={isAuthenticated}*/}
      {/*/>*/}
      {/*<PrivateRoute*/}
      {/*  path="/"*/}
      {/*  component={NoteList}*/}
      {/*  isAuthenticated={isAuthenticated}*/}
      {/*/>*/}
      <Route
        path="/note/:noteId"
        component={Note}
        isAuthenticated={isAuthenticated}
      />
      <Route path="/" component={NoteList} isAuthenticated={isAuthenticated} />
    </Switch>
  );
}

export default App;
