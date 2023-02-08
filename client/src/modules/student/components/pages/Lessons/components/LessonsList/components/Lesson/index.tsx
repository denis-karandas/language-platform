import React from 'react';
import { Button } from 'src/components';
import { LessonStatus, ILessonPropsx } from './models';
import { estimateButtonStyles } from './config';
import photo from './photo.png';

import styles from './Lesson.module.scss';

const Lesson = ({
  photoUrl,
  teacherFullName,
  language,
  date,
  time,
  price,
  status,
  estimate,
}: ILessonProps) => {
  const renderPhotoCell = () => (
    <div className={styles.cell}>
      <img src={photo} alt="" />
    </div>
  );

  const renderInfoCell = (name: string, value: string) => (
    <div className={styles.cell}>
      <p className={styles.name}>
        {name}
      </p>
      <p className={styles.value}>
        {value}
      </p>
    </div>
  );

  const renderButton = () => {
    if (status === LessonStatus.Completed) {
      return estimate
        ? <div>{estimate}</div>
        : <Button text="Estimate" styles={estimateButtonStyles} />;
    }
  };

  return (
    <div className={styles.container}>
        {renderPhotoCell()}
        {renderInfoCell('Teacher', teacherFullName)}
        {renderInfoCell('Language', language)}
        {renderInfoCell('Date', date)}
        {renderInfoCell('Time', time)}
        {renderInfoCell('Price', price)}
    </div>
  );
};

export default Lesson;
