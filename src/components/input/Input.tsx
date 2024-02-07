import { FC, HTMLProps } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: FC<InputProps> = ({ className, value, label, error, ...rest }) => {
  return (
    <label className={`${styles.container} ${className}`}>
      {label && <p className={styles.label}>{label}</p>}
      <input
        value={value}
        className={clsx(styles.input, error && styles.input_error)}
        {...rest}
      />
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};

export default Input;
