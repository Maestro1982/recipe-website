import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ links, close }) {
  const location = useLocation();
  return (
    <div className='sidebar' onClick={close}>
      {links.map((link) => (
        <Link
          to={link.path}
          className={
            location.pathname === link.path
              ? 'sidebar-link active'
              : 'sidebar-link'
          }
          key={link.title}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
