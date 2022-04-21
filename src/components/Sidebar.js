import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar({ links, close }) {
  return (
    <div className='sidebar' onClick={close}>
      {links.map((links) => (
        <a className='sidebar-link' href='#!' key={links.title}>
          <FontAwesomeIcon icon={links.icon} />
          {links.title}
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
