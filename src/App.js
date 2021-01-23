import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import pokemons from "./data";
import NavPokedex from "./NavPokedex";
import Pokedex from "./Pokedex";
import AboutPokedex from "./AboutPokedex";
import BookmarkedPokemons from "./BookmarkedPokemons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
        <NavPokedex />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Pokedex {...props} pokemons={pokemons} />}
          />
          <Route path="/about" component={AboutPokedex} />
          <Route path="/bookmarked" component={BookmarkedPokemons} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
