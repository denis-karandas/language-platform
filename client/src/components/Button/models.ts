import React from 'react';

export enum ButtonTheme {
  Default = 'default',
  Error = 'error',
}

export interface IButtonProps {
  text: string;
  styles?: React.CSSProperties;
  onClick?: () => void;
}
