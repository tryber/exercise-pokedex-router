import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  Pokedex, PokemonDetails, Header, FavoritePokemons
} from './components'
import {
  NotFound, About
} from './pages'
import pokemons from './data/data'
import pokedexLogo from './images/Pokedex.webp'

// testes

class App extends React.Component {
  constructor() {
    super();

    this.handleStateChange = this.handleStateChange.bind(this);

    this.state = {
      pokemonList: [ ...pokemons],
      favoritePokemons: []
    }
  }

  handleStateChange(pokemonId, booleanCheck) {
    if(booleanCheck) {
      this.setState((currentState) => (
        { 
          favoritePokemons: [
            ...currentState.favoritePokemons,
            pokemonId
          ]
        })
      )
    } else {
      const favoritePokemonsState = this.state.favoritePokemons;
      const indexToBeRemoved = favoritePokemonsState.indexOf(pokemonId);
      favoritePokemonsState.splice(indexToBeRemoved, 1);

      this.setState({ favoritePokemons: favoritePokemonsState })
    }
  }

  treatStoredData(dataToBeTreated) {
    const stringArray = dataToBeTreated.split(',')
    const numberArray = stringArray.map(number => parseInt(number, 10));
    return numberArray
  }

  componentDidMount() {
    const storedFavoritePokemons = localStorage.getItem('favoritePokemons');
    
    if ( storedFavoritePokemons ) {
      const treatedData = this.treatStoredData(storedFavoritePokemons);
      this.setState({ favoritePokemons: treatedData })
    }
  }

  componentDidUpdate() {
    const { favoritePokemons } = this.state;
    localStorage.setItem('favoritePokemons', favoritePokemons)
  }

  render() {

    const { pokemonList, favoritePokemons } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <img src={pokedexLogo} alt="Pokedex Logo" width="200px"/>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemonList} favoritePokemons={favoritePokemons} />} />
            <Route exact path="/pokemon/:id" render={(props) => <PokemonDetails {...props} handleStateChange={this.handleStateChange} favoritePokemons={favoritePokemons} />}/>
            <Route exact path="/about" component={About} />
            <Route exact path='/favorite-pokemons' render={(props) => <FavoritePokemons {...props} pokemonList={pokemonList} favoritePokemons={favoritePokemons} />}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;