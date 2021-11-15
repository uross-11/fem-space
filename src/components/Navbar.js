import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='header'>
      <img className='header__logo' src="./assets/shared/logo.svg" alt="" />
      <div className='header__line'></div>
      <div className='header__links nav'>
        <Link to='/' className='header__links__link'><span>01</span> HOME</Link>
        <Link to='/destination' className='header__links__link'><span>02</span> DESTINATION</Link>
        <Link to='/crew' className='header__links__link'><span>03</span> CREW</Link>
        <Link to='/technology' className='header__links__link'><span>04</span> TECHNOLOGY</Link>
      </div>
    </nav>
  );
}

export default Navbar;