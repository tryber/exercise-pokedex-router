import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';
import Header from './Header';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <h1> Pokedex </h1>
        <Switch>
          <Route exact path='/' render={ (props)=> <Pokedex {...props} pokemons={pokemons} />}/>
          <Route path='/pokemon/:pokemonId' render={ (props)=> <PokemonDetail {...props} />} /> 
          <Route path='/about' component={ About } />
          <Route path='' component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;