import React from 'react';
import { IPageSectionProps } from './models';

import styles from './PageSection.module.scss';

const PageSection = ({ children, title }: IPageSectionProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};

export default PageSection;
