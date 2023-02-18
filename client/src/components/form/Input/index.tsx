import React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { IInputProps } from './models';

import styles from './Input.module.scss';

const Input = ({ name }: IInputProps) => {
  const { control } = useFormContext();
  const { field } = useController({
    name,
    control,
  });

  return <input {...field} className={styles.container} />;
};

export default Input;
