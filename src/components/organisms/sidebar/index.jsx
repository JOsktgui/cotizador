import React from 'react';

import logoSvg from 'images/logo.svg';
import illustrationDesktopSvg from 'images/illustration-desktop.svg';

import './styles.scss';

const Sidebar = () => {
  return (
    <div className='container-sidebar'>
      <div className='header'>
        <img src={logoSvg} alt='logo' />
      </div>
      <img src={illustrationDesktopSvg} alt='illustration' />
    </div>
  );
};

export default Sidebar;
