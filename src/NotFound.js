import React from 'react';
import './pokedex.css';

class About extends React.Component {
  render () { 
    return(
      <div className="pokedex pokemon">
        <h1>Page not found!</h1>
        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/404.png' alt='Page not found - Pokemon 404 - Luxio'/>
      </div>
    );
  }
}

export default About;