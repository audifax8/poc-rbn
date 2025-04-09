import React from 'react';

import './configure-wrapper.css';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Model from './model';
import RbnHeader from './rbn-header';
import { useSelector } from 'react-redux';

function ConfigureWrapper() {
  const darkMode = useSelector((state: any) => state?.ui?.darkMode);
  return (
    <div className={`configure-wrapper ${darkMode ? 'fc-dark-mode' : ''}`}>
      <div id="rxcApp" className='rxcApp'></div>
      <RbnHeader />
      <Header />
      <Model />
      <Menu />
      <Footer />
    </div>
  );
}

export default ConfigureWrapper;
