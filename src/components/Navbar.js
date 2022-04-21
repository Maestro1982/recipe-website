import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      title: 'Home',
      path: '/',
      icon: faHome,
    },
    {
      title: 'Recipes',
      path: '/recipes',
      icon: faList,
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: faCog,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className='navbar container'>
        <a href='#!' className='logo'>
          F<span>oo</span>diesCorner
        </a>
        <div className='nav-links'>
          {links.map((link) => (
            <a href='#!' key={link.title}>
              {link.title}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? 'sidebar-btn active' : 'sidebar-btn'}
        >
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}

export default Navbar;
