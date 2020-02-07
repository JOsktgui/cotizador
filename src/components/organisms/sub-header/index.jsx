import React from 'react';
import { useHistory } from 'react-router-dom';

import backSvg from 'images/icon-back.svg';

import './styles.scss';

const SubHeader = ({ title, description, step }) => {
  const history = useHistory();

  return (
    <div className='container-sub-header'>
      <div className='container-sub-header__back'>
        <img
          onClick={() => history.goBack()}
          src={backSvg}
          alt='icon-back'
        />
        <div>
          <span>PASO { step }</span> DE 7
        </div>
      </div>
      <div
        className='container-sub-header__name'
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p>{ description }</p>
    </div>
  );
};

export default SubHeader;
