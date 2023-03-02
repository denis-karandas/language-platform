import React from 'react';
import { IUserProps } from '@student/components/common/Header/components/User/models';

import styles from './User.module.scss';

const User = ({ fullName, role, photoUrl }: IUserProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.fullName}>{fullName}</p>
        <p className={styles.role}>{role}</p>
      </div>
      <img src={photoUrl} alt="" />
    </div>
  );
};

export default User;
