import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { sidebarItems } from './config';
import { ISidebarItem } from './models';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const getItemClassName = ({ isActive }) =>
    cn(styles.item, { [styles.active]: isActive });

  const renderSidebarItems = () => {
    return sidebarItems.map((item: ISidebarItem) => (
      <NavLink key={item.name} to={item.path} className={getItemClassName}>
        {item.name}
      </NavLink>
    ));
  };

  return <div className={styles.container}>{renderSidebarItems()}</div>;
};

export default Sidebar;
