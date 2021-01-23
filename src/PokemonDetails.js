import React from "react";
import Pokemon from "./Pokemon";

class PokemonDetails extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pokemonIndex: props.pokemonIndex,
  //     filteredType: props.filteredType,
  //     moreDetails: props.moreDetails,
  //   };
  // }

  // filterPokemons(filteredType) {
  //   this.setState({ filteredType, pokemonIndex: 0 });
  // }

  // nextPokemon(numberOfPokemons) {
  //   this.setState((state) => ({
  //     pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
  //   }));
  // }

  fetchFilteredPokemons() {
    const { pokemons } = this.props;
    const pokemonId = parseInt(this.props.location.pathname.match(/\d+/)[0]);

    return pokemons.filter((pokemon) => {
      return pokemon.id === pokemonId;
    });
  }

  fetchPokemonTypes() {
    const { pokemons } = this.props;

    return [
      ...new Set(pokemons.reduce((types, { type }) => [...types, type], [])),
    ];
  }

  // componentDidMount() {
  //   this.fetchFilteredPokemons();
  //   this.fetchPokemonTypes();
  // }
  // toggleMoreDetails() {
  //   this.setState({
  //     moreDetails: !this.state.moreDetails,
  //   });
  //   console.log(this.state.moreDetails);
  // }

  render() {
    // const filteredPokemons = this.fetchFilteredPokemons();
    // const pokemon = filteredPokemons[this.state.pokemonIndex];
    // const pokemon = this.props.pokemon;
    // return console.log(this.state.moreDetails);
    // const pokemonId = this.props.location.pathname.match(/\d+/)[0];
    // const pokemon = this.props.pokemons;
    const pokemon = this.fetchFilteredPokemons()[0];
    return (
      <div className="pokedex">
        {console.log(this.props)}
        {console.log(typeof this.props.location.pathname.match(/\d+/)[0])}
        {console.log(this.props.pokemons)}
        {console.log(this.fetchFilteredPokemons())}
        {console.log(pokemon)}
        <Pokemon pokemon={this.fetchFilteredPokemons()[0]} />
        <p>{pokemon.summary}</p>
        <ul>
          {pokemon.foundAt.map((e) => (
            <li key={e.location}>
              <img src={e.map} alt="Pokemon Found at Map" />
            </li>
          ))}
        </ul>
        {/* <img src={pokemon.foundAt.map((e) => e)} alt="Pokemon Found At Map" /> */}
      </div>
    );
  }
}

export default PokemonDetails;
