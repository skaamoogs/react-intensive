import { useEffect } from 'react';
import { useRegisterMutation } from '../../api/auth/auth';
import Form from '../../components/form/Form';
import { type InputProps } from '../../components/input/Input';

import styles from './SignUp.module.scss';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { userSelector } from '../../store/userSlice';
import { toast } from 'react-toastify';
import { DefaultResponse } from '../../api/auth/auth-types';
import { Paths } from '../../const';

interface QueryError {
  status: number;
  data: DefaultResponse;
}

const SignUpPage = () => {
  const user = useAppSelector(userSelector);

  const [register, { data, isError, error }] = useRegisterMutation();

  const inputs: InputProps[] = [
    { name: 'username', label: 'Username' },
    { name: 'email', label: 'Email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  const handleSignUp = (formData: Record<string, FormDataEntryValue>) => {
    const { username, email, password } = formData;
    register({
      username: username.toString(),
      email: email.toString(),
      password: password.toString(),
    });
  };

  useEffect(() => {
    if (data) {
      toast(data.message);
    }

    if (error) {
      const errorData = error as QueryError;
      if (errorData) {
        toast(errorData.data.error);
        return;
      }
    }
  }, [data, isError, error]);

  if (user) return <Navigate to={Paths.Root} />;

  return (
    <div className={styles.form_container}>
      <h3 className={styles.title}>Sign up</h3>
      <div className={styles.form_wrapper}>
        <Form
          submitText='Sign up'
          inputs={inputs}
          submitHandler={handleSignUp}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
