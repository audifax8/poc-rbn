import { useSelector } from 'react-redux';

import Button from '../button';
import './index.css';
import { useRXC } from '../../providers/rxc';
import { useConfigure } from '../../providers/configure-core';

/*
<div className='fc-footer--show-menu'>
          <Button
            label='show menu'
            enabled={name}
          />
        </div>
*/

export default function Footer() {
  const { configureCoreService } = useConfigure();
  const name = useSelector((state: any) => state?.configureCore?.loaded);
  const { scriptLoaded, enabled } = useSelector((state: any) => state?.rxc);
  const { rxcService } = useRXC();
  const onRXCClick = async () => {
    if (scriptLoaded && enabled) {
      await rxcService.renderRxc();
    }
  };
  return (
    <section className='fc-footer'>
      <div className='fc-footer-actions'>
        <div className='fc-footer--rxc'>
          <Button
            label='try lenses'
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clipPath="url(#clip0_8344_7985)">
                  <path d="M2.53637 6.64612L3.25712 6.8535C3.55187 5.829 4.36037 4.062 6.46262 3.74025L6.34899 2.99888C4.51187 3.27975 3.12249 4.60912 2.53637 6.64612Z" fill="white"/>
                  <path d="M9.12099 0.75C7.86662 0.75 6.58374 0.83925 5.34474 1.00575C-1.20838 2.016 -1.42176 12.6116 2.99687 16.1576C3.94187 16.9088 5.04024 17.25 6.20612 17.25C10.7264 17.25 16.2674 12.1252 17.8964 5.90587C18.7514 2.2035 14.1782 0.75 9.12099 0.75ZM17.1677 5.727C16.423 8.56163 14.8071 11.2751 12.6171 13.368C10.5347 15.3585 8.19774 16.5 6.20612 16.5C5.16212 16.5 4.23962 16.1873 3.46599 15.573C1.20137 13.7554 0.153991 9.61687 1.08212 6.1515C1.47137 4.69837 2.55737 2.1945 5.44487 1.749C6.67412 1.584 7.91087 1.5 9.12099 1.5C12.8372 1.5 15.6936 2.30175 16.7616 3.645C17.2225 4.224 17.3552 4.90538 17.1677 5.727Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_8344_7985">
                    <rect width="18" height="18" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            }
            enabled={(scriptLoaded && enabled)}
            onClickCallback={onRXCClick}
          />
        </div>
      </div>
      <div className='fc-footer-price-info'>
        <div className={`fc-footer--price`}>
          <div className={`fc-footer-final-price ${!name ? 'fc-skeleton fc-skeleton-text': ''}`}>
            {name &&  <label>$180.00</label>}
          </div>
          <div className={`fc-footer-total-price ${!name ? 'fc-skeleton fc-skeleton-text': ''}`}>
            {name && <label>$200.00</label>}
          </div>
          <div className={`fc-footer-discount-price ${!name ? 'fc-skeleton fc-skeleton-text': ''}`}>
            {name && <label>-20%</label>}
          </div>
        </div>
        <div className='fc-footer--cart'>
          <Button
              label='add to cart'
              enabled={name}
              onClickCallback={(e: any) => {
                const { configure } = configureCoreService;
                console.log(configure);
                //console.log(configure.getConfig());
                console.log(configure.isWebGl());
                console.log(configure.getPrice());
                console.log(configure.getFcParams());
                
                configureCoreService.configure.saveRecipe({}, (err: any, recipe: any) => {
                  console.log({err, recipe});
                });
              }}
            />
        </div>
      </div>
    </section>
  );
}
