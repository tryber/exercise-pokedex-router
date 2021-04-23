import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import NavBar from './NavBar';
import PokemonDetail from './PokemonDetail';
import Favorite from './Favorite';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
    };

    this.setFavorited = this.setFavorited.bind(this);
  }

  setFavorited(value) {
    this.setState({ pokemons: value });
  }

  componentDidUpdate() {
    localStorage.pokemons = JSON.stringify(this.state.pokemons);
  }

  componentDidMount() {
    const pokemons = JSON.parse(localStorage.pokemons);
    this.setState({ pokemons: pokemons });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
        </div>
        <NavBar />
        <Switch>
          <Route
            path="/pokemons/:id"
            render={(props) => (
              <PokemonDetail
                {...props}
                setFavorited={this.setFavorited}
                pokemons={this.state.pokemons}
              />
            )}
          />
          <Route path="/favorited" render={() => <Favorite pokemons={this.state.pokemons} />} />
          <Route path="/about" component={About} />
          <Route exact path="/" render={() => <Pokedex pokemons={this.state.pokemons} />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
