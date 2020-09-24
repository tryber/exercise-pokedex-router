import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  Pokedex, PokemonDetails, Header
} from './components'
import {
  NotFound, About
} from './pages'
import pokemons from './data/data'
import pokedexLogo from './images/Pokedex.webp'

// testes

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <img src={pokedexLogo} alt="Pokedex Logo" width="200px"/>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons}/>} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;