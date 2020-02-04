import React from 'react';

import rMobileSvg from 'images/r-mobile.svg';
import rDesktopSvg from 'images/r-desktop.svg';
import illustrationSvg from 'images/illustration.svg';
import illustrationDesktopSvg from 'images/illustration-desktop.svg';

import safeSvg from 'images/ic_shield.svg';
import phoneSvg from 'images/ic_mobile.svg';
import moneySvg from 'images/gl_money.svg';
import clinicSvg from 'images/gl_clinic.svg';

import { FormHome } from 'components';

import './styles.scss';

const Home = () => {
  return (
    <div className='container-home'>
      <img
        src={rDesktopSvg}
        alt='r-desktp'
        className='bg-desktop'
      />

      <div className='container-home__hero-mobile'>
        <img
          src={rMobileSvg}
          alt='r-mobile'
          className='bg-mobile'
        />

        <img
          src={illustrationSvg}
          alt='illustration'
          className='people-mobile'
        />
      </div>

      <div className='container-home__body'>
        <div className='container-home__body-info'>
          <div>
            <div className='title'>
              Seguro de <br /> <span>Salud</span>
            </div>
            <ul className='list'>
              <li>
                <img src={safeSvg} alt='safe' />
                Cómpralo de manera fácil y rápida
              </li>
              <li>
                <img src={phoneSvg} alt='phone' />
                Cotiza y compra tu seguro 100% digital
              </li>
              <li>
                <img src={moneySvg} alt='money' />
                Hasta S/.12 millones de cobertura anual
              </li>
              <li>
                <img src={clinicSvg} alt='clinic' />
                Más de 300 clínicas en todo el Perú
              </li>
            </ul>
          </div>

          <img
            src={illustrationDesktopSvg}
            alt='illustration'
            className='people-desktop'
          />
        </div>

        <div className='container-home__body-form'>
          <FormHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
