import React from 'react';

import logoSvg from 'images/logo.svg';
import rMobileSvg from 'images/r-mobile.svg';
import familySvg from 'images/illustration-desktop.svg';
import baseThanks from 'images/base-thanks.svg';
import personSvg from 'images/person.svg';

import './styles.scss';

const SidebarThanks = () => {
  return (
    <div className='container-sidebar-thanks'>
      <div className='container-sidebar-thanks__header'>
        <img src={logoSvg} alt='logo' />
      </div>

      <div className='container-sidebar-thanks__body mobile'>
        <img
          className='base-thanks'
          src={rMobileSvg}
          alt='r-mobile'
        />
        <img
          className='person'
          src={personSvg}
          alt='person'
        />
      </div>

      <div className='container-sidebar-thanks__body desktop'>
        <img
          className='base-thanks'
          src={baseThanks}
          alt='r-mobile'
        />
        <img
          className='person'
          src={familySvg}
          alt='person'
        />
      </div>
    </div>
  );
};

export default SidebarThanks;
