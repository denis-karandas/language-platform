import React from 'react';
import { IHeaderProps } from '@student/components/common/Header/models';
import { Logo, Navigation, User } from './components';

import styles from './Header.module.scss';

const Header = ({ user }: IHeaderProps) => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navigation />
      <User {...user} />
    </div>
  );
};

export default Header;
