import { useEffect, createContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaded } from '../store/configure-core';
import { ConfigureService } from '../interfaces/configure-core';
import { setProduct } from '../store/product';
import { IConfigureService } from '../interfaces/common';
import { useSearchParams } from 'react-router-dom';
import { setFcParams } from '../store/fc-params';

const createCore = require('@cfg.plat/configure-core');

const ConfigureCoreContext = createContext({});

export function ConfigureCoreProvider(props: any) {
  const dispatch = useDispatch();
  const [queryParameters] = useSearchParams();
  const queryWorkflow = queryParameters.get('workflow');
  const queryCustomer = queryParameters.get('customer');
  const queryProduct = queryParameters.get('product');
  const avoidRTR = queryParameters.get('avoidRTR');
  const loaded = useSelector((state: any) => state?.configureCore?.loaded);
  const fcParams = useSelector((state: any) => state?.fcParams?.values);
  const mergedParams = {
    ...fcParams,
    workflow: queryWorkflow || fcParams.workflow,
    customer: queryCustomer || fcParams.customer,
    customerId: queryCustomer || fcParams.customer,
    product: queryProduct || fcParams.product,
    productId: queryProduct || fcParams.product,
    avoidRTR
  };

  const { children } = props;
  const [configureCoreService, setConfigureCoreService] = useState<IConfigureService>();
  useEffect(() => {
    if (loaded) {
      return;
    }

    const { workflow, product, customer } = mergedParams;
    const graphUrl =
      `//cdn-prod.fluidconfigure.com/static/configs/3.13.0/prod/${workflow}/${customer}/product/${product}/graph-settings-en_US.json`;
    const preferencesUrl =
      `//cdn-prod.fluidconfigure.com/static/configs/3.13.0/prod/${workflow}/${customer}/preferences.json`;

    Promise.all([
      fetch(graphUrl),
      fetch(preferencesUrl)
    ])
    .then(async ([productGraphResponse, preferencesResponse]) => {
      if (productGraphResponse.ok && preferencesResponse.ok) {
        const productGraph = await productGraphResponse.json();
        const preferences = await preferencesResponse.json();
        createCore(
          {
            productGraph,
            preferences,
            fcParams: mergedParams
          },
          (error: any, configureCore: any) => {
            if (error) {
              console.error(error);
              return;
            }
            const _cService = new ConfigureService(configureCore);
            const product = _cService.getProduct();
            dispatch(setLoaded(true));
            dispatch(setProduct(product));
            dispatch(setFcParams(mergedParams));
            setConfigureCoreService(_cService);
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });

  },[]);
  const value = { configureCoreService };
  return (
    <ConfigureCoreContext.Provider value={value}>
      {children}
    </ConfigureCoreContext.Provider>
  );
};
