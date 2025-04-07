import { useSelector } from 'react-redux';

import AttributeHeader from './components/attribute-header';

import './index.css';
import { ICAMap } from '../../constants';

export default function Menu() {
  const name = useSelector((state: any) => state?.product?.name);
  const casToRender = useSelector((state: any) => state?.ui?.casToRender);
  
  return (
    <section className={`fc-menu ${!name ? 'fc-skeleton' : ''}`}>
      {(casToRender && casToRender.length) && 
        <ul className='fc-menu--list'>
        {(casToRender && casToRender.length) && casToRender.map(
            (caInfo: ICAMap) => {
              return (
                <li key={caInfo.id}>
                  <AttributeHeader caInfo={caInfo} onClick={() => {}} key={caInfo.id}/>
                </li>
              );
        })}
        </ul>
      }
    </section>
  );
}
