import React from 'react';
import { Button } from 'components';
import { IPageTitleButton } from './models';
import { buttonStyles } from './config';

import styles from './PageTitle.module.scss';

const PageTitle = ({ title, buttons }: IPageTitleProps) => {
  const isButtons = !!buttons?.length;

  const renderButton = (button: IPageTitleButton) => (
    <Button key={button.text} {...button} styles={buttonStyles} />
  );

  const renderButtons = () => (
    <div className={styles.buttons}>{buttons.map(renderButton)}</div>
  );

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {isButtons && renderButtons()}
    </div>
  );
};

export default PageTitle;
