import React from 'react';

import './configure-wrapper.css';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Model from './model';

function ConfigureWrapper() {
  return (
    <div className='configure-wrapper'>
      <Header />
      <Model />
      <Menu />
      <Footer />
    </div>
  );
}

export default ConfigureWrapper;
