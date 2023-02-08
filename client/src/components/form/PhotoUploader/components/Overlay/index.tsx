import React from 'react';
import cn from 'classnames';
import { OverlayTheme, IOverlayProps } from './models';
import { Button } from 'src/components';

import styles from './Overlay.module.scss';

const Overlay = ({
    theme = OverlayTheme.Default,
    icon,
    text,
    className,
    button
}: IOverlayProps) => {
    const containerClassName = cn(className, styles.container, styles[`${theme}Theme`]);

    const getIconByTheme = () => {
      switch (theme) {
        case OverlayTheme.Error:
          return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM22 30H18V26H22V30ZM22 22H18V10H22V22Z" fill="white"/> </svg>
          );
        default:
          return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M33.6842 10.5263V16.8211C33.6842 16.8211 29.4947 16.8421 29.4737 16.8211V10.5263H23.1579C23.1579 10.5263 23.1789 6.33684 23.1579 6.31579H29.4737V0H33.6842V6.31579H40V10.5263H33.6842ZM27.3684 18.9474V12.6316H21.0526V6.31579H4.21053C1.89474 6.31579 0 8.21053 0 10.5263V35.7895C0 38.1053 1.89474 40 4.21053 40H29.4737C31.7895 40 33.6842 38.1053 33.6842 35.7895V18.9474H27.3684ZM4.21053 35.7895L10.5263 27.3684L14.7368 33.6842L21.0526 25.2632L29.4737 35.7895H4.21053Z" fill="white"/> </svg>
          );
      }
    };

  return (
    <div className={containerClassName}>
      <div className={styles.information}>
        {getIconByTheme()}
        <p className={styles.label}>{text}</p>
      </div>
      {button && <Button {...button} />}
    </div>
  );
};

export default Overlay;
