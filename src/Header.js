import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='menu'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/about' className='link'>About</Link>
        <Link to='/favorites' className='link'>Favorites</Link>
      </div>
    );
  }
}

export default Header;