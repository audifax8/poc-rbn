import { useSelector } from 'react-redux';
import React, { useCallback } from 'react';

import './index.css';

export default function Button(props: any) {
  const { icon, label, onClickCallback } = props;
  const darkMode = useSelector((state: any) => state?.ui?.darkMode);

  const onClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClickCallback) {
      onClickCallback();
    }
  }, []);
  return (
    <button
      className={`fc-button ${darkMode ? 'fc-dark-mode' : ''}`}
      onClick={onClick}
    >
      {icon && icon}
      {label && <label className={`fc-button--label`}>{label}</label>}
    </button>
  );
};