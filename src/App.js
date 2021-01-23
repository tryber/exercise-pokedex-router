import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import pokemons from "./data";
import NavPokedex from "./NavPokedex";
import Pokedex from "./Pokedex";

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
          >
            {/* <Pokedex pokemons={pokemons} /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
