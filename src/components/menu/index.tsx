import { useSelector } from 'react-redux';

import './index.css';

export default function Menu() {
  const name = useSelector((state: any) => state?.product?.name);
  return (
    <section className={`fc-menu ${!name ? 'fc-skeleton' : ''}`}>
    </section>
  );
}
