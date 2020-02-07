import React from 'react';
import { SidebarHome, FormHome } from 'components';

import './styles.scss';

const Home = () => {
  return (
    <SidebarHome>
      <div className='container-home__body'>
        <FormHome />
      </div>
    </SidebarHome>
  );
};

export default Home;
