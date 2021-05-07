import React from 'react';
import './pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image, id} = this.props.pokemon;
    const { showDetailsLink } = this.props
    const isFav = localStorage.getItem(name)
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          {showDetailsLink && <Link to={`pokemon-detail/${id}`}> More details </Link>}

        </div>
        <img src={image} alt={`${name} sprite`} />
        {isFav === 'favoritado' && (
          <img
            className="favorite-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1077px-Star_icon_stylized.svg.png"
            alt={`${name} is marked as favorite`}
          />
        )}
      </div>
    );
  }
}

Pokemon.defaultProps = {
  showDetailsLink: true,
};

export default Pokemon;