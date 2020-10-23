import React from 'react';
import './Image.css';

class Image extends React.Component {
  render() {
    return (
      <div className='img-container'>
        <img src={this.props.src} alt={this.props.alt}/>
      </div>
    );
  }
}

export default Image;