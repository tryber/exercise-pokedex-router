import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const {handle, pokemonType, label, disabled} = this.props;
    if (disabled === true) return <button onClick={handle} disabled value={pokemonType}>{label}</button>
    return (
      <button onClick={handle} value={pokemonType}>{label}</button>
    );
  }
}

export default Button;