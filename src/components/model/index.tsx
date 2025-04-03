import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';

import './index.css';

export default function Model() {
  const name = useSelector((state: any) => state?.product?.name);
  return (
    <section className='fc-model'>
      {name && <img className='' src={`/img/${isMobile ? 'mobile' : 'desktop'}.png`}/>}
      {!name && <div className='fc-image-wrapper fc-skeleton'>
        <img className='fc-skeleton' src='/img/sk.png'/>
      </div>}
    </section>
  );
}
//<img className='fc-skeleton' src='/img/sk.png'/>
//<img className='fc-skeleton' src={`/img/${isMobile ? 'mobile' : 'desktop'}.png`}/>