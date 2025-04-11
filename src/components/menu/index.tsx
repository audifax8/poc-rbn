import { useSelector } from 'react-redux';

import AttributeHeader from './components/attribute-header';

import './index.css';
import { ICAMap } from '../../interfaces';

export default function Menu() {
  const name = useSelector((state: any) => state?.product?.name);
  const { casToRender, skeletonCas} = useSelector((state: any) => state?.ui);
  
  return (
    <section className={`fc-menu ${!name ? '' : ''}`}>
      {((!casToRender || !casToRender.length) && (skeletonCas && skeletonCas.length)) ? 
        (<ul className='fc-menu--list'>
        {(skeletonCas && skeletonCas.length) && skeletonCas.map(
            (caInfo: ICAMap) => {
              return (
                <li key={caInfo.id}>
                  <AttributeHeader caInfo={caInfo} onClick={() => {}} key={caInfo.id}/>
                </li>
              );
        })}
        </ul>) : <></>
      }
      {(casToRender && casToRender.length) ? 
        (<ul className='fc-menu--list'>
        {(casToRender && casToRender.length) && casToRender.map(
            (caInfo: ICAMap) => {
              return (
                <li key={caInfo.id}>
                  <AttributeHeader caInfo={caInfo} onClick={() => {}} key={caInfo.id}/>
                </li>
              );
        })}
        </ul>) : <></>
      }
    </section>
  );
}
