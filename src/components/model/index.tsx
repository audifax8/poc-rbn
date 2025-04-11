import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';

import './index.css';
import { useEffect } from 'react';
import { useConfigure } from '../../providers/configure-core';
import { useRTR } from '../../providers/rtr';

export default function Model() {
  const name = useSelector((state: any) => state?.product?.name);
  //const name = false;
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

  //const old = '/img/sk.png';
  const skeletonImgPath = `/img/${isMobile ? 'mobile' : 'desktop'}.png`;

  return (
    <section className='fc-model'>
      <div
        id='viewer'
        className={`fc-rtr ${((scriptLoaded && name) && !avoidRTR) ? 'fc-rtr-on' : ''}`}>
          {!name && !scriptLoaded && 
            <div className='fc-image-wrapper fc-skeleton'>
              <img className='fc-skeleton' src={skeletonImgPath}/>
            </div>
          }
          {!name && scriptLoaded && 
            <div className='fc-image-wrapper fc-skeleton'>
              <img className='fc-skeleton' src={skeletonImgPath}/>
            </div>
          }
          {name && !scriptLoaded &&
            <div className='fc-image-wrapper'>
              <img className='' src={skeletonImgPath}/>
            </div>
          }
          {avoidRTR && 
            <div className='fc-image-wrapper'>
              <img className='' src={skeletonImgPath}/>
            </div>
          }
      </div>
    </section>
  );
}
