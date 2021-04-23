import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import NavBar from './NavBar';
import PokemonDetail from './PokemonDetail';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
      </div>
      <NavBar />
      <Switch>
        <Route
          path="/pokemons/:id"
          render={(props) => <PokemonDetail {...props} pokemons={pokemons} />}
        />
        <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
