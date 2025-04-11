import { createSlice } from '@reduxjs/toolkit';
import { RBN_CUSTOMER_ID, WAYFARER_ID } from '../constants';

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
      product: WAYFARER_ID,
      productId: WAYFARER_ID,
      customer: RBN_CUSTOMER_ID,
      customerId: RBN_CUSTOMER_ID,
      workflow: 'prod',
      apiKey: 'LUX-Ray-Ban-8taOhSR5AFyjt9tfxU'
    }
  },
  reducers: {
    setFcParams: (state, action) => {
      state.values = action.payload;
    }
  },
});

/*const t = {
  applicationName: "configure-ui",
  applicationVersion: "4.110.2",
  baseUrl: "//cdn-prod.fluidconfigure.com/static/assets/prod/prod",
  configureEndpoint: "prod.fluidconfigure.com",
  customer: 1581,
  customerBaseUrl: "//cdn-prod.fluidconfigure.com/static/assets/prod/prod/customers/c1581/configureHtml/",
  customerId: 1581,
  environment: "prod",
  facebookAppId: 805996949423760,
  product: 22956,
  productBaseUrl: "//cdn-prod.fluidconfigure.com/static/assets/prod/prod/customers/c1581/configureHtml/products/p_22956/",
  productId: 22956,
  sessionId: "fe382c91-cd72-49e5-9725-75a65e751f6c",
  shouldSkipCache: true,
  workflow: "prod",
  apiKey: 'LUX-Ray-Ban-8taOhSR5AFyjt9tfxU'
};*/

// Action creators are generated for each case reducer function
export const { setFcParams } = fcParamsSlice.actions;

export default fcParamsSlice.reducer;