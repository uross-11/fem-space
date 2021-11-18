import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useWindowWidth } from '../hooks/helpers';

import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen])

  return (
    <nav className='header container'>
      <img className='header__logo' src={logo} alt={`logo-img`} />
      <div className='header__line hide-for-mobile'></div>
      <div className='header__links hide-for-mobile'>
        <Link to='/' className='header__links__link'><span>00</span> HOME</Link>
        <Link to='/destination' className='header__links__link'><span>01</span> DESTINATION</Link>
        <Link to='/crew' className='header__links__link'><span>02</span> CREW</Link>
        <Link to='/technology' className='header__links__link'><span>03</span> TECHNOLOGY</Link>
      </div>
      <div className='line'></div>
      {useWindowWidth() <= 375 && 
        <button onClick={() => {setIsMenuOpen(!isMenuOpen)}} className='header__toggle'>
          <img src={hamburger} alt={`hamburger-img`} />
        </button>
      }
      {isMenuOpen && 
        <div className='header__mobile'>
          <Link to='/' className='header__mobile__link'><span>00</span> HOME</Link>
          <Link to='/destination' className='header__mobile__link'><span>01</span> DESTINATION</Link>
          <Link to='/crew' className='header__mobile__link'><span>02</span> CREW</Link>
          <Link to='/technology' className='header__mobile__link'><span>03</span> TECHNOLOGY</Link>
        </div>
      }
    </nav>
  );
}

export default Header;