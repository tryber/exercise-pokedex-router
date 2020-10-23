import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
  render() {
    return (
      <div className='not-found-message-container'>
        <h1>Page Not Found</h1>
        <img src="https://i.ibb.co/DkQdYfq/not-found-pikachu.png" alt="not-found-pikachu" border="0" />
      </div>
    );
  }
}

export default NotFound;