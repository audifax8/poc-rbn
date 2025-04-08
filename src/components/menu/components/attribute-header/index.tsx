import React from 'react';
import { useState, memo } from 'react';


import './index.css';
import { ICAMap, IAttributeValue } from '../../../../constants';
import { useConfigure } from '../../../../providers/configure-core';

//import AttributeSelector from '../attribute-selector';

interface IAttributeHeaderPropTypes {
  onClick: Function;
  caInfo: ICAMap
};

const AttributeHeader = memo(function (props: IAttributeHeaderPropTypes) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { configureCoreService } = useConfigure();

  const { caInfo, onClick } = props;
  const { alias, icon, selectedAvId, id } = caInfo;
  if (!selectedAvId) {
    return (
      <>
        <div className='fc-attribute-header' key={id}>
          <div className='fc-attribute-header--info'>
            <div className='fc-attribute-header--info--image fc-skeleton '>
              <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
              </svg>
            </div>
            <div className='fc-attribute-header--info--ca-name fc-skeleton fc-skeleton-text'>
              <span></span>
            </div>
            <div className='fc-attribute-header--info--av-name fc-skeleton fc-skeleton-text'>
              <span></span>
            </div>
          </div>
          <div className='fc-attribute-header--icon'>
            <button className='fc-attribute-header--icon--button fc-skeleton'>
              {
              <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
              </svg>
              }
            </button>
          </div>
        </div>
      </>
    );
  }
  const ca = configureCoreService.getAttributeByAlias(alias);
  const { values } = ca;
  const avSelected = values.find((av: IAttributeValue) => av.selected);

  /*const { configureService } = useConfigure();
  const { values } = ca;
  const [menuOpen, setMenuOpen] = useState(false);
  const [avs] = useState(values);
  const avSelected = values.find((av: IAttributeValue) => av.selected);
  ;*/
  return (
    <>
      <div className='fc-attribute-header' key={0}>
        <div className='fc-attribute-header--info'>
          <div className='fc-attribute-header--info--image'>
            <img src={`/img/${icon}.png`} alt={`configurable attribute ${icon}`} width={48} height={48} />
          </div>
          <div className='fc-attribute-header--info--ca-name'>
            <span>{ca?.name}</span>
          </div>
          <div className='fc-attribute-header--info--av-name'>
            <span>{avSelected?.name}</span>
          </div>
        </div>
        <div className='fc-attribute-header--icon'>
          <button className='fc-attribute-header--icon--button'
            onClick={() => { return setMenuOpen(!menuOpen); }}
            >
            {menuOpen ? 
              (<svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
                <g clipPath='url(#clip0_3994_28473)'>
                  <path d='M8.37893 3.05702L16.1836 10.862L15.2409 11.8047L8.37893 4.94302L1.51693 11.8047L0.574261 10.862L8.37893 3.05702Z' fill='#1F1F24'/>
                </g>
                <defs>
                  <clipPath id='clip0_3994_28473'>
                    <rect width='16' height='16' fill='white' transform='matrix(-1 0 0 -1 16.3789 16)'/>
                  </clipPath>
                </defs>
              </svg>) :
              (<svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none'>
                <g clipPath='url(#clip0_3994_29036)'>
                  <path d='M8.37888 12.943L0.574219 5.13798L1.51689 4.19531L8.37888 11.057L15.2409 4.19531L16.1836 5.13798L8.37888 12.943Z' fill='#1F1F24'/>
                </g>
                <defs>
                  <clipPath id='clip0_3994_29036'>
                    <rect width='16' height='16' fill='white' transform='translate(0.378906)'/>
                  </clipPath>
                </defs>
              </svg>)
            }
          </button>
        </div>
      </div>
    </>
  );
});

export default AttributeHeader;