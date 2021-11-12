import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/* logo */}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/destination'>Destination</Link>
        <Link to='/crew'>Crew</Link>
        <Link to='/technology'>Technology</Link>
      </div>
    </nav>
  );
}

export default Navbar;