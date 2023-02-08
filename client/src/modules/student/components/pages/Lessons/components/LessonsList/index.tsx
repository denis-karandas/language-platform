import React from 'react';
import { Lesson } from './components';

import styles from './LessonsList.module.scss';

const LessonsList = () => {
  return (
    <div className={styles.container}>
        <Lesson
          teacherFullName="John Smith"
          language="English"
          date="20 Dec, 2022"
          time="13:30"
          price="500.00 UAH"
          status="completed"
        />
        <Lesson />
        <Lesson />
    </div>
  );
};

export default LessonsList;
