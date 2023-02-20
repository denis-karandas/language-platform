import React from 'react';
import { PageTitle, PageSection, InfoBlock } from 'components';
import { IButtonProps } from 'components/Button/models';
import { LessonsList } from './components';

import styles from './Lessons.module.scss';

const Lessons = () => {
  const buttons: IButtonProps[] = [
    {
      text: 'Open classroom',
    },
    {
      text: 'Schedule a lesson',
    },
  ];

  return (
    <div className={styles.container}>
      <PageTitle title="Lessons" buttons={buttons} />
      <div className={styles.content}>
        <div className={styles.infoBlocks}>
          <InfoBlock
            backgroundColor="#7BC8F3"
            title="Next lesson"
            text="20 Dec, 2022 - 1:30PM"
          />
          <InfoBlock
            backgroundColor="#A6EDA5"
            title="Scheduled lessons"
            text="3"
          />
        </div>
        <PageSection title="Scheduled lessons">
          <LessonsList />
        </PageSection>
        <PageSection title="Past lessons">
          <LessonsList />
        </PageSection>
      </div>
    </div>
  );
};

export default Lessons;
