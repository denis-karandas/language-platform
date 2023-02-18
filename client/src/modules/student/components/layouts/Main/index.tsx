import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'student/components';

import styles from './Main.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
