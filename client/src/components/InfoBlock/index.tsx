import React from 'react';
import cn from 'classnames';
import { css } from '@emotion/css';

import styles from './InfoBlock.module.scss';

const InfoBlock = ({
    icon,
    backgroundColor,
    title,
    text,
}) => {
    const iconWrapperClassName = cn(
        styles.iconWrapper,
        backgroundColor ? css({ backgroundColor }) : null
    );

  return (
    <div className={styles.container}>
        <div className={iconWrapperClassName}>
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M37 7.09136L28.49 0L26.1035 2.81082L34.6135 9.90218L37 7.09136ZM10.878 2.81082L8.51 0L0 7.07299L2.3865 9.88381L10.878 2.81082ZM19.425 11.28H16.65V22.3029L25.4375 27.5387L26.825 25.279L19.425 20.925V11.28ZM18.5 3.93148C9.3055 3.93148 1.85 11.3352 1.85 20.4657C1.85 29.5963 9.287 37 18.5 37C27.6945 37 35.15 29.5963 35.15 20.4657C35.15 11.3352 27.6945 3.93148 18.5 3.93148ZM18.5 33.3257C11.3405 33.3257 5.55 27.5755 5.55 20.4657C5.55 13.356 11.3405 7.60576 18.5 7.60576C25.6595 7.60576 31.45 13.356 31.45 20.4657C31.45 27.5755 25.6595 33.3257 18.5 33.3257Z" fill="white"/> </svg>
        </div>
        <div className={styles.infoWrapper}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    </div>
  );
};

export default InfoBlock;
