import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/shared/logo.svg'
import useSelect from '../hooks/useSelect';
import Sidebar from './Sidebar';

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

  useSelect(selectRef, location);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location])

  return (
    <nav className='header container__header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt={`logo-img`} />
      </Link>
      <div className='header__line hide-for-tablet'></div>
      <div ref={selectRef} className='header__links hide-for-mobile'>
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
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </nav>
  );
}

export default Header;