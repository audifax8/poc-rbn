import { useSelector } from 'react-redux';

import AttributeHeader from './components/attribute-header';

import './index.css';

export default function Menu() {
  const name = useSelector((state: any) => state?.product?.name);
  
  return (
    <section className={`fc-menu ${!name ? 'fc-skeleton' : ''}`}>
      <AttributeHeader onClick={() => {}} />
    </section>
  );
}
