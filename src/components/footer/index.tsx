import { useSelector } from 'react-redux';

import Button from '../button';
import './index.css';

export default function Footer() {
  const name = useSelector((state: any) => state?.product?.name);
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
          />
      </div>
    </section>
  );
}
