import React from 'react';
import './style_sheets/PokemonDetails.css';

class PokemonDetails extends React.Component {
  constructor(props) {
    super();

    this.handleFavoriteCheck = this.handleFavoriteCheck.bind(this);

    this.state = {
      isFavorite: false,
      pokemonId: props.location.state.id,
    }
  }

  // Check if POKEMONS is favorite and CHECK BOX!
  checkIfPokemonIsFavorite() {
    const { favoritePokemons } = this.props;
    const { id } = this.props.location.state;

    const alreadyFavorite = favoritePokemons.includes(id);

    console.log(`Is this pokemon already favorited? ${alreadyFavorite}`)

    return alreadyFavorite
  }

  handleFavoriteCheck( {target} ) {
    const check = target.checked;
    const { pokemonId } = this.state;
    const { handleStateChange } = this.props;
    
    if(check) {
      this.setState (() => ({
         isFavorite: true 
        }), () => {
          handleStateChange(pokemonId, this.state.isFavorite);
        }
      );
    } else {
      this.setState (() => ({
        isFavorite: false 
       }), () => {
        handleStateChange(pokemonId, this.state.isFavorite);
       }
     );
    }
  }

  render() {
    const { name, type, averageWeight, summary, foundAt, image } = this.props.location.state;
    const isPokemonFavorite = this.checkIfPokemonIsFavorite();

    return (
      <div className='details-container'>
        <h2>Pokemon Details</h2>
        <img src={image} alt={`${name} sprite`} id='details-pokemon-gif' />
        <main className='pokemon' id={type}>
          <div>
            <h3>{name}</h3>
            <p><b>Type:</b> {type}</p>
            <p><b>Average Weight:</b> {averageWeight.value} {averageWeight.measurementUnit}</p>
            <p><b>Sumary:</b> {summary}</p>
            <div className='details-container'>
              <p><b>Found at: </b>{foundAt.map(location => <p>{location.location} </p>)}</p>
              <div>
                {foundAt.map(location => <img src={location.map} alt={location.location}/>)}
              </div>
              <div className='fav-checkbox-container'>
                <input id='fav-checkbox' type="checkbox" onClick={this.handleFavoriteCheck} checked={isPokemonFavorite}/>
                <label htmlFor="fav-checkbox">'Joinha!'</label>
              </div>
            </div>
          </div>
        </main>
      </div>

    )
  }
}

export default PokemonDetails;
