import { createSlice } from '@reduxjs/toolkit';

export const fcParamsSlice = createSlice({
  name: 'fcParams',
  initialState: {
    values: {
      applicationName: 'configure-core',
      baseUrl: '//cdn-development.fluidconfigure.com/static/assets/prod/prod',
      configureEndpoint: 'development.fluidconfigure.com',
      customerBaseUrl: '//cdn-development.fluidconfigure.com/static/assets/prod/prod/customers/c1581/configureHtml/',
      environment: 'prod',
      productBaseUrl: '//cdn-development.fluidconfigure.com/static/assets/prod/prod/customers/c1581/configureHtml/products/p_22956/',
      shouldSkipCache: false,
      product: 22956,
      productId: 22956,
      customer: 1581,
      customerId: 1581,
      workflow: 'prod'
    }
  },
  reducers: {
    setFcParams: (state, action) => {
      state.values = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setFcParams } = fcParamsSlice.actions;

export default fcParamsSlice.reducer;