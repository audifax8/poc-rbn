import { useEffect, createContext, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaded } from '../store/configure-core';
import { ConfigureService } from '../services/configure-core';
import { setProduct } from '../store/product';
import { IConfigureService } from '../interfaces';
//import { useSearchParams } from 'react-router-dom';
import { setFcParams } from '../store/fc-params';
import { setCASToRender } from '../store/ui';

const createCore = require('@cfg.plat/configure-core');

const ConfigureCoreContext = createContext({});

export function useConfigure(): any {
  return useContext(ConfigureCoreContext);
}

export function ConfigureCoreProvider(props: any) {
  const dispatch = useDispatch();
  const loaded = useSelector((state: any) => state?.configureCore?.loaded);
  const fcParams = useSelector((state: any) => state?.fcParams?.values);
  //const [queryParameters] = useSearchParams();
  /*const queryWorkflow = queryParameters.get('workflow');
  const queryCustomer = queryParameters.get('customer');
  const queryProduct = queryParameters.get('product');
  const avoidRTR = queryParameters.get('avoidRTR');*/
  /*const mergedParams = {
    ...fcParams,
    workflow: queryWorkflow || fcParams.workflow,
    customer: queryCustomer || fcParams.customer,
    customerId: queryCustomer || fcParams.customer,
    product: queryProduct || fcParams.product,
    productId: queryProduct || fcParams.product,
    avoidRTR
  };*/

  const mergedParams = {
    ...fcParams,
    workflow: fcParams.workflow,
    customer: fcParams.customer,
    customerId: fcParams.customer,
    product: fcParams.product,
    productId: fcParams.product
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
      fetch(preferencesUrl),
      //fetch('//rtrmv.essilorluxottica.com/lib/v/3.0.3/main.umd.js'),
      //fetch('//vmmv.luxottica.com/v/4.13/index.umd.js'),
      //fetch('//rxc.luxottica.com/rxc3/fe/test/v1.1.1/dist/rxc.js')
    ])
    .then(async (
      [
        productGraphResponse,
        preferencesResponse,
        //rtrResponse,
        //vmResponse,
        //rxcResponse
      ]
    ) => {
      console.log({
        productGraphResponse,
        preferencesResponse,
        //rtrResponse,
        //vmResponse,
        //rxcResponse
      });
      if (productGraphResponse.ok && preferencesResponse.ok) {
        const productGraph = await productGraphResponse.json();
        const preferences = await preferencesResponse.json();
        console.log({preferences, productGraph, mergedParams});

        const t = {
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
          workflow: "prod"
        };
        createCore(
          {
            productGraph,
            preferences,
            fcParams: t
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
            const casToRender = _cService.mapCas();
            dispatch(setCASToRender(casToRender));
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
