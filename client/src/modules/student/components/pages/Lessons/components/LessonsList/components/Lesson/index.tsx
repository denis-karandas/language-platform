import React from 'react';
import { ILessonProps } from './models';
import photo from './photo.png';

import styles from './Lesson.module.scss';

const Lesson = ({
  teacherFullName,
  language,
  date,
  time,
  price,
}: ILessonProps) => {
  const renderPhotoCell = () => (
    <div className={styles.cell}>
      <img src={photo} alt="" />
    </div>
  );

  const renderInfoCell = (name: string, value: string) => (
    <div className={styles.cell}>
      <p className={styles.name}>{name}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );

  // const renderButton = () => {
  //   if (status === LessonStatus.Completed) {
  //     return estimate ? (
  //       <div>{estimate}</div>
  //     ) : (
  //       <Button text="Estimate" styles={estimateButtonStyles} />
  //     );
  //   }
  // };

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
