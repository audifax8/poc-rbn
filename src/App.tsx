import React from 'react';
import { Provider } from 'react-redux'

import { ConfigureCoreProvider } from './providers/configure-core';

import store from './store'

import ConfigureWrapper from './components/configure-wrapper';
//import { PreloadScripts } from './hooks/preload';
import { RTRProvider } from './providers/rtr';
import { RXCProvider } from './providers/rxc';

function App() {
  return (
    <Provider store={store}>
      <ConfigureCoreProvider>
      <RTRProvider>
      <RXCProvider>
        <ConfigureWrapper />
      </RXCProvider>
      </RTRProvider>
      </ConfigureCoreProvider>
    </Provider>
  );
}

export default App;

/*

 <Provider store={store}>
      <PreloadScripts />
      <ConfigureCoreProvider>
      <RTRProvider>
        <ConfigureWrapper />
      </RTRProvider>
      </ConfigureCoreProvider>
    </Provider>

*/
