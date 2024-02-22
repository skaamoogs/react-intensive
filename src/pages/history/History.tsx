import { useAppSelector } from '../../store/hooks';
import { userHistorySelector } from '../../store/userDataSlice';
import styles from './History.module.scss';
import { Link } from 'react-router-dom';

const HistoryPage = () => {
  /* TODO Когда будет сделана авторизация, 
  брать историю запросов (urls) из данных пользователя
  */
  const history = useAppSelector(userHistorySelector);

  return (
    <>
      <h1 className={styles.title}>История запросов</h1>
      {history.length ? (
        <ul>
          {history.map(({ id, url }) => {
            const { searchParams, pathname, search } = new URL(url);

            return (
              <li key={id}>
                <Link to={pathname + search}>
                  <div className={styles.entry}>
                    <span>{Array.from(searchParams.values()).join(', ')}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No entries</p>
      )}
    </>
  );
};

export default HistoryPage;
