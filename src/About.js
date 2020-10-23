import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <img src='https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png' alt='Pokedex-logo' />
        <p>The Pokédex is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.<br></br><br></br>Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.</p>
        <div className='additional-images'>
          <img src='https://cdn.bulbagarden.net/upload/9/9e/Ash_Dawn_Pok%C3%A9dexes.png' alt='Pokemon-trainers' />
          <img src='https://cdn.bulbagarden.net/upload/thumb/2/28/Pok%C3%A9dex_HOME_Switch.png/800px-Pok%C3%A9dex_HOME_Switch.png' alt='Pokedex-interface' />
          <img src='https://cdn.bulbagarden.net/upload/f/fa/Ash_Sinnoh_Pok%C3%A9dex.png' alt='Pokedex-device' />
        </div>
      </div>
    );
  }
}

export default About;