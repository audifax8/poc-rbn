import { useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import './index.css';

export default function Button(props: any) {
  const { icon, label, onClickCallback, enabled } = props;
  const darkMode = useSelector((state: any) => state?.ui?.darkMode);

  const onClick = useCallback((e: React.MouseEvent) => {
    console.log('clik');
    e.preventDefault();
    e.stopPropagation();
    if (onClickCallback) {
      onClickCallback();
    }
  }, []);
  return (
    <button
      className={`${!enabled ? 'fc-skeleton' : ''} fc-button ${darkMode ? 'fc-dark-mode' : ''}`}
      onClick={onClick}
      disabled={!enabled}
    >
      {icon && icon}
      {label && <label className={`fc-button--label`}>{label}</label>}
    </button>
  );
};