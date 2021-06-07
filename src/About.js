import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Pokedex</h2>
        <img
          src="https://cdn2.bulbagarden.net/upload/thumb/3/36/479Rotom-Pok%C3%A9dex.png/250px-479Rotom-Pok%C3%A9dex.png"
          alt="about"
        ></img>
        <p>
          The Pokédex is a handheld electronic encyclopedia device; one which is capable of
          recording and retaining information of the various Pokémon of the world. In order to
          accomplish Professor Oak's goal of a complete Pokémon database, the Pokédex is designed to
          find and record data on each Pokémon the Trainer meets. Pokémon are added to the Pokédex
          simply by encountering them in battle or, sometimes, by seeing a picture of the Pokémon.
          However, detailed entries are not recorded until the player catches the Pokémon, receives
          it as a prize/gift or acquires it in a trade.
        </p>
      </div>
    );
  }
}

export default About;
