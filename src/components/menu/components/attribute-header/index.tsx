import React from 'react';
import { useState, memo } from 'react';


import './index.css';

//import AttributeSelector from '../attribute-selector';

interface IAttributeHeaderPropTypes {
  onClick: Function;
  //caInfo: ICAMap
};

const AttributeHeader = memo(function (props: IAttributeHeaderPropTypes) {
  const [menuOpen, setMenuOpen] = useState(false);
  /*const { configureService } = useConfigure();
  const { caInfo, onClick } = props;
  const { alias, icon, selectedAvId, id } = caInfo;
  if (!selectedAvId) {
    return <></>
  }
  const ca = configureService.getAttributeByAlias(alias);
  const { values } = ca;
  const [menuOpen, setMenuOpen] = useState(false);
  const [avs] = useState(values);
  const avSelected = values.find((av: IAttributeValue) => av.selected);
  const click = (av: IAttributeValue) => {
    onClick.call(null, {ca, av});
  };*/
  return (
    <>
      <div className='fc-attribute-header' key={0}>
        <div>
          
        </div>
        <div>
          <span className='fc-attribute-header--ca-name'>Temple</span>
        </div>
        <div >
          <span className='fc-attribute-header--av-name'>Black</span>
        </div>
        <div className='fc-attribute-header--icon'>
          <button
            onClick={() => {}}
            >
            {menuOpen ? 
              (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <g clip-path="url(#clip0_3994_29036)">
                    <path d="M8.37888 12.943L0.574219 5.13798L1.51689 4.19531L8.37888 11.057L15.2409 4.19531L16.1836 5.13798L8.37888 12.943Z" fill="#1F1F24"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3994_29036">
                      <rect width="16" height="16" fill="white" transform="translate(0.378906)"/>
                    </clipPath>
                  </defs>
                </svg>
              ) :
              (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <g clip-path="url(#clip0_3994_28473)">
                    <path d="M8.37893 3.05702L16.1836 10.862L15.2409 11.8047L8.37893 4.94302L1.51693 11.8047L0.574261 10.862L8.37893 3.05702Z" fill="#1F1F24"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3994_28473">
                      <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 -1 16.3789 16)"/>
                    </clipPath>
                  </defs>
                </svg>
              )
            }
          </button>
        </div>
      </div>
    </>
  );
});

export default AttributeHeader;