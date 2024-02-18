import { useEffect } from 'react';
import { useLoginMutation } from '../../api/auth/auth';
import Form from '../../components/form/Form';
import { type InputProps } from '../../components/input/Input';

import styles from './Login.module.scss';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUser, userSelector } from '../../store/userSlice';
import { DefaultResponse } from '../../api/auth/auth-types';
import { error } from 'console';
import { toast } from 'react-toastify';

interface QueryError {
  status: number;
  data: DefaultResponse;
}

const LoginPage = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const [login, { data, isError, error, isLoading, isSuccess }] =
    useLoginMutation();
  const navigate = useNavigate();

  const inputs: InputProps[] = [
    { name: 'usernameOrEmail', label: 'Username or Email' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  const handleSignUp = async (formData: Record<string, FormDataEntryValue>) => {
    const { usernameOrEmail, password } = formData;
    login({
      email_or_username: usernameOrEmail.toString(),
      password: password.toString(),
    });
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
      // TODO: Redirect to the page the user came from when accessing /login.
      navigate('/');
      return;
    }

    if (error) {
      const errorData = error as QueryError;
      if (errorData) {
        toast(errorData.data.error);
        toast(errorData.data.message);
        return;
      }
    }
  }, [data, isError, error]);

  useEffect(() => {
    if (data) {
      if (!data.error) {
        alert(data.message);
        return;
      }
    }

    if (error) {
      const errorData = error as QueryError;
      if (errorData) {
        toast(errorData.data.error);
        return;
      }
    }
  }, [data, isError, error]);

  if (user) return <Navigate to='/' />;

  return (
    <div className={styles.form_container}>
      <h3 className={styles.title}>Sign in</h3>
      <div className={styles.form_wrapper}>
        <Form
          submitText='Sign in'
          inputs={inputs}
          submitHandler={handleSignUp}
        />
      </div>
    </div>
  );
};

export default LoginPage;
