import React from 'react';
import logoSvg from 'images/logo.svg';
import illustrationDesktopSvg from 'images/illustration-desktop.svg';
import backSvg from 'images/icon-back.svg';

import { FormAddRelatives } from 'components';

import './styles.scss';

const AddRelatives = () => {
  return (
    <div className='add-relatives'>
      <div className='add-relatives__sidebar'>
        <div className='header'>
          <img src={logoSvg} alt='logo' />
        </div>
        <img src={illustrationDesktopSvg} alt='illustration' />
      </div>

      <div className='add-relatives__body'>
        <div className='add-relatives__info'>
          <div className='add-relatives__info-back'>
            <img src={backSvg} alt='icon-back' />
            <div>
              <span>1</span> DE 7
            </div>
          </div>
          <div className='add-relatives__info-name'>
            Hola, <span>Luisa</span>
          </div>
          <p>Valida que los datos sean correctos.</p>
        </div>

        <div className='add-relatives__form'>
          <FormAddRelatives />
        </div>
      </div>

    </div>
  );
};

export default AddRelatives;
