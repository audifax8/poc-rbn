import { useSelector } from 'react-redux';

import Button from '../button';
import './index.css';
//import { useConfigure } from '../../providers/configure-core';

export default function Footer() {
  const name = useSelector((state: any) => state?.configureCore?.loaded);
  //const { configureCoreService  } = useConfigure();
  return (
    <section className='fc-footer'>
      <div className={`fc-footer--price`}>
        <div className={`fc-footer-final-price ${!name ? 'fc-skeleton': ''}`}>
          <label>$180.00</label>
        </div>
        <div className={`fc-footer-total-price ${!name ? 'fc-skeleton': ''}`}>
          <label>$200.00</label>
        </div>
        <div className={`fc-footer-discount-price ${!name ? 'fc-skeleton': ''}`}>
          <label>-20%</label>
        </div>
      </div>
      <div className='fc-footer--cart'>
        <Button
            label='add to cart'
            enabled={name}
            onClickCallback={(e: any) => {
              /*const { configure } = configureCoreService;
              console.log(configure);
              //console.log(configure.getConfig());
              console.log(configure.isWebGl());
              console.log(configure.getPrice());
              console.log(configure.getFcParams());
              
              configureCoreService.configure.saveRecipe({}, (err: any, recipe: any) => {
                console.log({err, recipe});
              });*/
            }}
          />
      </div>
    </section>
  );
}
