import { FormEvent, HTMLProps } from 'react';
import styles from './Form.module.scss';
import Input, { InputProps } from '../input/Input';

export interface FormProps extends HTMLProps<HTMLFormElement> {
  inputs: InputProps[];
}

const Form = ({ inputs }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map((field) => (
        <Input key={field.name} {...field} />
      ))}
    </form>
  );
};

export default Form;
