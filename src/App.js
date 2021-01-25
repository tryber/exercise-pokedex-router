import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Pokedex, PokemonDetails } from './pages';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>
          <Pokedex exact path="/" pokemons={pokemons} />
          <PokemonDetails path="/pokemons/:id" pokemons={pokemons} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
