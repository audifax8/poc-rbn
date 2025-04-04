import { createContext, useContext, useEffect, useState } from 'react';
import { RTRService, IRTRService } from '../services/rtr';

const RTRContext = createContext({});

export function useRTR(): any {
  return useContext(RTRContext);
}
export function RTRProvider(props: any) {
  const { children } = props;
  const [rtrService, setRTRService] = useState<IRTRService>();

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = '//rtrmv.essilorluxottica.com/lib/v/3.0.3/main.umd.js';
    scriptTag.addEventListener('load', () => {
      const _rtrService = new RTRService(window.rtrViewerMV);
      setRTRService(_rtrService);
    });
    document.body.appendChild(scriptTag);
  },[]);
  
  const value = { rtrService, setRTRService };
  return (
    <RTRContext.Provider value={value}>
      {children}
    </RTRContext.Provider>
  );
}
