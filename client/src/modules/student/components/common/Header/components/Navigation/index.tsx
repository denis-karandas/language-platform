import React from 'react';
import { Link } from 'react-router-dom';
import { items } from './config';
import { INavigationItem } from './models';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const renderItems = () => {
    return items.map((item: INavigationItem) => (
      <div key={item.name} className={styles.item}>
        <Link to={item.path}>{item.name}</Link>
      </div>
    ));
  };

  return <div className={styles.container}>{renderItems()}</div>;
};

export default Navigation;
