import React from 'react';
import { Provider } from 'react-redux'

import { ConfigureCoreProvider } from './providers/configure-core';

import store from './store'

import ConfigureWrapper from './components/configure-wrapper';
import { PreloadScripts } from './hooks/preload';

function App() {
  return (
    <Provider store={store}>
      <PreloadScripts />
      <ConfigureCoreProvider>
        <ConfigureWrapper />
      </ConfigureCoreProvider>
    </Provider>
  );
}

export default App;
