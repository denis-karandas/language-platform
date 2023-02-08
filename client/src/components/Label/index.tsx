import React from 'react';
import cn from 'classnames';
import { css } from '@emotion/css';
import { ILabelProps } from './models';

import styles from './Label.module.scss';

const Label = ({
    text,
    children,
    htmlFor,
    position = 'top',
    indent,
}: ILabelProps) => {
  const getIndentStyles = () => {
    switch (position) {
      case 'bottom':
        return { marginTop: indent };
      case 'left':
        return { marginRight: indent };
      case 'right':
        return { marginLeft: indent };
      default:
        return { marginBottom: indent };
    }
  };

  const containerClassName = cn(styles.container);
  const labelClassName = cn(styles.label, indent && css(getIndentStyles()));

  return (
    <div className={containerClassName}>
        <label className={labelClassName} htmlFor={htmlFor}>{text}</label>
        {children}
    </div>
  );
}

export default Label;
