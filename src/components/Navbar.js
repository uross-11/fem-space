import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'

const Navbar = () => {
  return (
    <nav className='header container'>
      <img className='header__logo' src={logo} alt={`logo-img`} />
      <div className='header__line hide-for-mobile'></div>
      <div className='header__links hide-for-mobile nav'>
        <Link to='/' className='header__links__link'><span>01</span> HOME</Link>
        <Link to='/destination' className='header__links__link'><span>02</span> DESTINATION</Link>
        <Link to='/crew' className='header__links__link'><span>03</span> CREW</Link>
        <Link to='/technology' className='header__links__link'><span>04</span> TECHNOLOGY</Link>
      </div>
      <div className='line'></div>
      <button className='header__toggle'>
        <img src={hamburger} alt={`hamburger-img`} />
      </button>
      {/* fix hide-for-mobile */}
      <div className='header__mobile hide-for-mobile nav'>
        <Link to='/' className='header__links__link'><span>01</span> HOME</Link>
        <Link to='/destination' className='header__links__link'><span>02</span> DESTINATION</Link>
        <Link to='/crew' className='header__links__link'><span>03</span> CREW</Link>
        <Link to='/technology' className='header__links__link'><span>04</span> TECHNOLOGY</Link>
      </div>
    </nav>
  );
}

export default Navbar;