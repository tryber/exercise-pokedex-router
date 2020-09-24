import React from 'react';
import './App.css';
import pokemons from './data/data'
import Pokedex from './components/Pokedex';
import { BrowserRouter, Link, Route } from 'react-router-dom'

// testes

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <Route path="/" render={(props) => <Pokedex {...props} pokemons={pokemons}/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;