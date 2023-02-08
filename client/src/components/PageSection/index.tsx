import React from 'react';

import styles from './PageSection.module.scss';

const PageSection = ({ title, children }) => {
  return (
    <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {children}
    </div>
  );
};

export default PageSection;
