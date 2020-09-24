import React from 'react';
import './style_sheets/Header.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return(
      <header>
        <nav>
          <div className='navigation-item'><Link to='/'>Home</Link></div>
          <div className='navigation-item'><Link to='/about'>About</Link></div>
        </nav>
      </header>
    )
  }
}

export default Header;
