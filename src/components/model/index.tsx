import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';

import './index.css';
import { useEffect } from 'react';
import { useConfigure } from '../../providers/configure-core';
import { useRTR } from '../../providers/rtr';

export default function Model() {
  const name = useSelector((state: any) => state?.product?.name);
  const { scriptLoaded } = useSelector((state: any) => state?.rtr);
  const avoidRTR = useSelector((state: any) => state?.fcParams?.values?.avoidRTR);

  const { configureCoreService } = useConfigure();
  const { rtrService } = useRTR();

  useEffect(() => {
    if (name && scriptLoaded) {
      if (!avoidRTR) {
        const token = configureCoreService.getToken();
        rtrService.init(token);
      }
    }
  },
  [scriptLoaded, name]);

  return (
    <section className='fc-model'>
      <div
        id='viewer'
        className={`fc-rtr ${((scriptLoaded && name) && !avoidRTR) ? 'fc-rtr-on' : ''}`}>
          {!name && !scriptLoaded && 
            <div className='fc-image-wrapper fc-skeleton'>
              <img className='fc-skeleton' src='/img/sk.png'/>
            </div>
          }
          {!name && scriptLoaded && 
            <div className='fc-image-wrapper fc-skeleton'>
              <img className='fc-skeleton' src='/img/sk.png'/>
            </div>
          }
          {name && !scriptLoaded &&
            <div className='fc-image-wrapper'>
              <img className='' src={`/img/${isMobile ? 'mobile' : 'desktop'}.png`}/>
            </div>
          }
          {avoidRTR && 
            <div className='fc-image-wrapper'>
              <img className='' src={`/img/${isMobile ? 'mobile' : 'desktop'}.png`}/>
            </div>
          }
      </div>
    </section>
  );
}
