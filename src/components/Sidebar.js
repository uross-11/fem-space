import React, { useEffect, useRef, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSelect from '../hooks/useSelect';

const Sidebar = ({ isSidebarOpen }) => {
  const selectRef = useRef();
  const location = useLocation().pathname;

  useSelect(selectRef, location);

  return (
    <div id='header-select' ref={selectRef} className='header__sidebar'>
      <Link id='/' to='/' className='header__sidebar__link'><span>00</span> HOME</Link>
      <Link id='/destination' to='/destination' className='header__sidebar__link'><span>01</span> DESTINATION</Link>
      <Link id='/crew' to='/crew' className='header__sidebar__link'><span>02</span> CREW</Link>
      <Link id='/technology' to='/technology' className='header__sidebar__link'><span>03</span> TECHNOLOGY</Link>
    </div>
  )
}

export default Sidebar;