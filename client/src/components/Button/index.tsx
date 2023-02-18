import React from 'react';
import { css } from '@emotion/css';
import { IButtonProps } from './models';

const Button = ({ text, styles, onClick }: IButtonProps) => {
  const containerClassName = css({
    padding: '8px 15px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#111111',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E7E7E7',
    borderRadius: '5px',
    cursor: 'pointer',
    userSelect: 'none',

    '&:hover': {
      backgroundColor: '#4D73DA',
      border: '1px solid #4D73DA',
      color: '#FFFFFF',
    },
    ...styles,
  });

  return (
    <button className={containerClassName} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
