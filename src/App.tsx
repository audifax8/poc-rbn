import React from 'react';
import { Provider } from 'react-redux'

import { ConfigureCoreProvider } from './providers/configure-core';

import store from './store'
import { BrowserRouter } from 'react-router-dom';

import ConfigureWrapper from './components/configure-wrapper';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ConfigureCoreProvider>
          <ConfigureWrapper></ConfigureWrapper>
        </ConfigureCoreProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
