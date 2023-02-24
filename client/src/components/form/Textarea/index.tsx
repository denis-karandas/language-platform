import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ITextareaProps } from './models';

import styles from './Textarea.module.scss';

const Textarea = ({ name }: ITextareaProps) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
  });

  return <textarea {...field} className={styles.container} />;
};

export default Textarea;
