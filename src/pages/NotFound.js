import React from 'react';
import notFoundImage from '../images/page404.webp'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <img src={notFoundImage} alt="Page 404 disclaimer" />
      </div>
    )
  }
}

export default NotFound;
