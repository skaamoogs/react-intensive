import { Link, useRouteError } from 'react-router-dom';
import styles from './Error.module.scss';
import clsx from 'clsx';
import { Paths } from '../../const';
import Button from '../../components/button/Button';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.wrapper}>
      <h1 className={clsx(styles.text, styles.errorCode)}>404</h1>
      <p className={styles.text}>Page Not Found</p>
      <Link to={Paths.Root} className={styles.link}>
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
