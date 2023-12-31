import React from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

import styles from './styles.module.scss';

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T, null>;
  placeholder: string;
  type?: 'text' | 'number';
  textarea?: boolean;
};

const Input = <T extends FieldValues>({
  name,
  control,
  placeholder,
  type = 'text',
  textarea,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        textarea ? (
          <textarea
            {...field}
            className={styles.textarea}
            placeholder={placeholder}
            rows={100}
          />
        ) : (
          <input
            {...field}
            type={type}
            className={styles.input}
            placeholder={placeholder}
          />
        )
      }
    />
  );
};

export default Input;
