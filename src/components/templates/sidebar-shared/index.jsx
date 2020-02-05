import React from 'react';

import { Sidebar } from 'components';

import './styles.scss';

const SidebarShared = ({ children }) => {
  return (
    <div className='container-sidebar-shared'>
      <div className='container-sidebar-shared__sidebar'>
        <Sidebar />
      </div>
      <div className='container-sidebar-shared__body'>
        { children }
      </div>
    </div>
  );
};

export default SidebarShared;
