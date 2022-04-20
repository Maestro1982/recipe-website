import React from 'react';

function Navbar() {
  return (
    <div className='navbar container'>
      <a href='#!' className='logo'>
        T<span>oo</span>minosPlace
      </a>
      <div className='nav-links'>
        <a href='#!'>Home</a>
        <a href='#!'>Recipes</a>
        <a href='#!'>Settings</a>
      </div>
      <div className='sidebar-btn active'>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    </div>
  );
}

export default Navbar;
