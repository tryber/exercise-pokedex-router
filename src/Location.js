import React, { Component } from 'react';

class Location extends Component {
  render() {
    const { foundAt } = this.props;
    const map = foundAt.map(({ location, map }, index) => (
      <div className={location} key={index}>
        <h3>{location}</h3>
        <img src={map} alt={location}></img>
      </div>
    ));
    return <div className="location">{map}</div>;
  }
}

export default Location;
