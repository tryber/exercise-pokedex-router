import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Pokedex from './Pokedex.js';
import PokemonDetails from './PokemonDetails.js';
import Header from './Header.js';
import About from './About.js';
import NotFound from './NotFound.js';
import Favorites from './Favorites.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    const storage = window.localStorage.favorites !== undefined ? window.localStorage.favorites.split(',') : [];
    this.state = {
      favorites: storage,
    };
    this.handleFavorites = this.handleFavorites.bind(this);
  }

   // Handle function to handle favorite pokemon state
  handleFavorites({ target }) {
    const { type, checked } = target;
    const value = type === 'checkbox' ? target.value : target.id;
    this.setState(actualState => {
      let newFavorites = actualState.favorites;
      if (checked) {
        newFavorites.push(value);
      } else {
        const index = newFavorites.indexOf(value);
        if (index > -1) newFavorites.splice(index, 1);
      }
      return ({favorites: newFavorites});
    },
    () => {
      window.localStorage.favorites = this.state.favorites;
    });
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/pokemons/:pokemonName'  render={(props) => <PokemonDetails {...props} favorites={this.state.favorites} handle={this.handleFavorites} />} />
            <Route path='/about' component={About} />
            <Route path='/page-not-found' component={NotFound} />
            <Route path='/favorites' render={() => <Favorites favorites={this.state.favorites} handle={this.handleFavorites} />} />
            <Route exact path='/' render={() => <Pokedex favorites={this.state.favorites} handle={this.handleFavorites} />} />
            <Redirect to='/page-not-found' />
          </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
