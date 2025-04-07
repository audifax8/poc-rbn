import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RXCService, IRXCService } from '../services/rxc';
import { setScriptLoaded, setEnabled } from '../store/rxc';

const RXCContext = createContext({});

export function useRXC(): any {
  return useContext(RXCContext);
}
export function RXCProvider(props: any) {
  const dispatch = useDispatch();
  const { children } = props;
  const [rxcService, setRxcService] = useState<IRXCService>();

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = '//rxc.luxottica.com/rxc3/fe/test/v1.0.1/dist/rxc.js';
    scriptTag.addEventListener('load', () => {
      const _rxcService = new RXCService(window.rtrViewerMV);
      setRxcService(_rxcService);
      dispatch(setScriptLoaded(true));
      dispatch(setEnabled(true));
    });
    document.body.appendChild(scriptTag);
  },[]);
  
  const value = { rxcService, setRxcService };
  return (
    <RXCContext.Provider value={value}>
      {children}
    </RXCContext.Provider>
  );
}
