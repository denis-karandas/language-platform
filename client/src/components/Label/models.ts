import React from 'react';

export interface ILabelProps {
  text: string;
  children: React.ReactNode;
  htmlFor?: string;
  position: ILabelPosition;
  indent?: number;
}

type ILabelPosition = 'top' | 'bottom' | 'left' | 'right';
