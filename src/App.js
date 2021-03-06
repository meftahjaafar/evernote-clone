import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import FavoriteItem from "./components/notes/FavoriteItem";
import NoteDetail from "./components/notes/NoteDetail";
import EditForm from "./components/notes/EditForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={FavoriteItem} />
        <Route exact path="/note/:id" component={NoteDetail} />
        <Route exact path="/note/edit/:id" component={EditForm} />
      </Switch>
    </Router>

  );
}

export default App;
