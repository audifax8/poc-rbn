import React from 'react';

import './configure-wrapper.css';
import Header from './header';
import Footer from './footer';
import Menu from './menu';
import Model from './model';
import RbnHeader from './rbn-header';
import { useSelector } from 'react-redux';

function ConfigureWrapper() {
  const { darkMode, menuOpen } = useSelector((state: any) => state?.ui);

  const classes = `configure-wrapper ${darkMode ? 'fc-dark-mode' : ''} ${menuOpen ? 'fc-menu-open': ''}`;
  return (
    <div className={classes}>
      <div id="rxcApp" className='rxcApp'></div>
      <RbnHeader />
      <Header />
      <Model />
      <Footer />
      <Menu />
    </div>
  );
}

export default ConfigureWrapper;
