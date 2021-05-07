import React, { Component } from 'react';
import './App.css';
import Data from './data';
import Pokedex from './Pokedex';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import PokemonDetail from './PokemonDetail';
import Favorite from './favoritePokemons'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/favorites">
              <li>Favorite Pokémons</li>
            </Link>
          </nav>
          <Switch>
            <Route exact path="/" render={ () => <Pokedex pokemons={ Data } />}/>
            <Route exact path="/About" component={ About }/>
            <Route exact path="/favorites" component={ Favorite }/>
            <Route path={`/pokemon-detail/:pokeId`} render={ (props) => 
            <PokemonDetail {...props}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;