import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { VMMVService, IVMMVService } from '../services/vm';
import { setScriptLoaded, setEnabled } from '../store/vm';

const VMContext = createContext({});

export function useVM(): any {
  return useContext(VMContext);
}
export function VMProvider(props: any) {
  const dispatch = useDispatch();
  const { children } = props;
  const [vmService, setVmService] = useState<IVMMVService>();

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = '//vmmv.luxottica.com/v/4.13/index.umd.js';
    scriptTag.addEventListener('load', () => {
      const _vmService = new VMMVService(window.rtrViewerMV);
      setVmService(_vmService);
      dispatch(setScriptLoaded(true));
      dispatch(setEnabled(true));
    });
    document.body.appendChild(scriptTag);
  },[]);
  
  const value = { vmService, setVmService };
  return (
    <VMContext.Provider value={value}>
      {children}
    </VMContext.Provider>
  );
}
