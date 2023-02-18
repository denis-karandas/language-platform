import React from 'react';
import { Logo, Navigation, Student } from './components';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <Navigation />
      <Student />
    </div>
  );
};

export default Header;
