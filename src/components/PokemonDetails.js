import React from 'react';

class PokemonDetails extends React.Component {
  render() {
    const { name, type, averageWeight, summary, foundAt, image } = this.props.location.state;
    console.log(this.props.location.state);
    return (
      <div>
        <h2>Pokemon Details</h2>
        <img src={image} alt={`${name} sprite`} />
        <main className='pokemon'>
          <div>
            <h3>{name}</h3>
            <p><b>Type:</b> {type}</p>
            <p><b>Average Weight:</b> {averageWeight.value} {averageWeight.measurementUnit}</p>
            <p><b>Sumary:</b> {summary}</p>
            <div>
              <p><b>Found at: </b>{foundAt.map(location => <p>{location.location} </p>)}</p>
              <div>
                {foundAt.map(location => <img src={location.map} alt={location.location}/>)}
              </div>
            </div>
          </div>
        </main>
      </div>

    )
  }
}

export default PokemonDetails;
