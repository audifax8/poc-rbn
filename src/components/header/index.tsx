import { useSelector } from 'react-redux';

import './index.css';
export default function Header() {
  const name = useSelector((state: any) => state?.product?.name);
  return (
    <section className='fc-header'>
      <div className='fc-header--name'>
        {name && <span className=''>{name}</span>}
        {!name && <div className='fc-skeleton-text fc-skeleton'></div>}
      </div>
      <div className='fc-header--vm'>
        vm
      </div>
    </section>
  );
}
