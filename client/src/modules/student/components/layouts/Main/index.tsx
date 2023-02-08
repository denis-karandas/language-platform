import React from 'react';
import { Outlet } from 'react-router-dom';
import { IMainLayoutProps } from './models';
import { Sidebar } from 'student/components';

import styles from './Main.module.scss';

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
