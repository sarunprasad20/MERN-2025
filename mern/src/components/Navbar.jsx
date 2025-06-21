import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul className='nav-list'>
          <li><Link to='/' className='nav-link'>Home</Link></li>
          <li><Link to='/contact' className='nav-link'>Contact</Link></li>
          <li><Link to='/skills' className='nav-link'>Skills</Link></li>
            <li><Link to='/counter' className='nav-link'>Counter</Link></li>
          <li><Link to='/hook' className='nav-link'>Hook</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;