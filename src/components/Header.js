import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useWindowWidth } from '../hooks/helpers';

import logo from '../assets/shared/logo.svg'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const selectRef = useRef();
  const location = useLocation().pathname;

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Replace with useSelect hook!
    if (selectRef.current) {
      const arr = selectRef.current.children;
      const len = arr.length;

      for (let i = 0; i < len; i++) {
        if (arr[i].id === location) {
          arr[i].classList.add('selected');
        } else {
          arr[i].classList.remove('selected');
        }
      }
    }
  }, [isSidebarOpen, location])

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location])

  return (
    <nav className='header container__header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt={`logo-img`} />
      </Link>
      <div className='header__line hide-for-tablet'></div>
      <div className='header__links hide-for-mobile'>
        <Link to='/' className='header__links__link'>
          <span className='hide-for-tablet'>00</span>
          HOME
        </Link>
        <Link to='/destination' className='header__links__link'>
          <span className='hide-for-tablet'>01</span>
          DESTINATION
        </Link>
        <Link to='/crew' className='header__links__link'>
          <span className='hide-for-tablet'>02</span>
          CREW
        </Link>
        <Link to='/technology' className='header__links__link'>
          <span className='hide-for-tablet'>03</span>
          TECHNOLOGY
        </Link>
      </div>
      <button onClick={() => {setIsSidebarOpen(!isSidebarOpen)}} className='header__toggle show-for-mobile'>
        <span></span><span></span><span></span>
      </button>
      {isSidebarOpen && 
        <div id='header-select' ref={selectRef} className='header__sidebar'>
          <Link id='/' to='/' className='header__sidebar__link'><span>00</span> HOME</Link>
          <Link id='/destination' to='/destination' className='header__sidebar__link'><span>01</span> DESTINATION</Link>
          <Link id='/crew' to='/crew' className='header__sidebar__link'><span>02</span> CREW</Link>
          <Link id='/technology' to='/technology' className='header__sidebar__link'><span>03</span> TECHNOLOGY</Link>
        </div>
      }
    </nav>
  );
}

export default Header;