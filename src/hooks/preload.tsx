import { useEffect } from 'react';
import { preload } from 'react-dom';
import { useSelector } from 'react-redux';
//import { useSearchParams } from 'react-router-dom';

export function PreloadScripts() {
  const fcParams = useSelector((state: any) => state?.fcParams?.values);
  const product = useSelector((state: any) => state?.product);
  /*const [queryParameters] = useSearchParams();
  const queryWorkflow = queryParameters.get('workflow');
  const queryCustomer = queryParameters.get('customer');
  const queryProduct = queryParameters.get('product');
  const mergedParams = {
    ...fcParams,
    workflow: queryWorkflow || fcParams.workflow,
    customer: queryCustomer || fcParams.customer,
    customerId: queryCustomer || fcParams.customer,
    product: queryProduct || fcParams.product,
    productId: queryProduct || fcParams.product
  };*/

  const mergedParams = {
    ...fcParams,
    workflow: fcParams.workflow,
    customer: fcParams.customer,
    customerId: fcParams.customer,
    product: fcParams.product,
    productId: fcParams.product
  };

  const { vendorId, currency } = product;

  useEffect(() => {
    const { workflow, product, customer } = mergedParams;
    const graphUrl =
      `//cdn-prod.fluidconfigure.com/static/configs/3.13.0/prod/${workflow}/${customer}/product/${product}/graph-settings-en_US.json`;
    const preferencesUrl =
      `//cdn-prod.fluidconfigure.com/static/configs/3.13.0/prod/${workflow}/${customer}/preferences.json`;

    preload(graphUrl, {as: 'script', crossOrigin: 'anonymous'});
    preload(preferencesUrl, {as: 'script', crossOrigin: 'anonymous'});
    preload('//rtrmv.essilorluxottica.com/lib/v/3.0.3/main.umd.js', {as: 'script', crossOrigin: 'anonymous'});
    preload('//vmmv.luxottica.com/v/4.13/index.umd.js', {as: 'script', crossOrigin: 'anonymous'});
    preload('//rxc.luxottica.com/rxc3/fe/test/v1.1.1/dist/rxc.js', {as: 'script', crossOrigin: 'anonymous'});
    if (vendorId && currency) {
      preload(`//one-configurator-services-mockup.luxdeepblue.com/components?vendorId=${vendorId}&currency=${currency}`, {as: 'script', crossOrigin: 'anonymous'});
    }
    
  },[]);

  return <></>;
};
