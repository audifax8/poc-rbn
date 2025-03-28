import { configureStore } from '@reduxjs/toolkit';
import configureCore from './configure-core';
import model from './model';
import product from './product';
import fcParams from './fc-params';
import rtr from './rtr';
import rxc from './rxc';
import vm from './vm';

export default configureStore({
  reducer: {
    configureCore,
    model,
    product,
    fcParams,
    rtr,
    rxc,
    vm
  },
});