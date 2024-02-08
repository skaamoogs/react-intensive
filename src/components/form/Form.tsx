import { ChangeEvent, FormEvent, HTMLProps, useState } from 'react';
import styles from './Form.module.scss';
import Input, { InputProps } from '../input/Input';
import Button from '../button/Button';
import { validateForm } from '../../utils/formValidator';
import { FormRecord } from '../../types/types';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  inputs: InputProps[];
  submitHandler?: (form: FormRecord) => void;
  error?: string;
}

const Form = ({ inputs, submitHandler, error }: FormProps) => {
  const [inputErrors, setInputErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    const { isValid, errors } = validateForm(formJson);
    if (isValid) {
      submitHandler?.(formJson);
      return;
    }
    setInputErrors(errors);
  };

  const clearError = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setInputErrors((prevState) => ({
      ...prevState,
      [input.name]: '',
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map(({ name, ...inputProps }) => (
        <Input
          {...inputProps}
          key={name}
          className={styles.input}
          name={name}
          error={name && inputErrors[name]}
          onChange={clearError}
        />
      ))}
      <Button className={styles.button}>Авторизоваться</Button>
    </form>
  );
};

export default Form;
