import { FC } from 'react';

import styles from './Header.module.scss';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { Paths } from '../../const';
import { createSearchQuery } from '../../utils/helpers';
import { MovieTypes } from '../../types/types';
import { deleteUser, userSelector } from '../../store/userSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Header: FC = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <Link to={Paths.Root} className={styles.logo}>
        <div className={styles.bold}>
          <span className={styles.bounce_letter}>A</span>
          <span>ston</span>
        </div>
        <div className={styles.thin}>FILMS</div>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <Link
              to={{
                pathname: Paths.Catalog,
                search: createSearchQuery({ type: MovieTypes.Movie }),
              }}
            >
              Movies
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link
              to={{
                pathname: Paths.Catalog,
                search: createSearchQuery({ type: MovieTypes.TvSeries }),
              }}
            >
              TV Series
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link
              to={{
                pathname: Paths.Catalog,
                search: createSearchQuery({ type: MovieTypes.Cartoon }),
              }}
            >
              Cartoons
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user_block}>
        {user ? (
          <>
            <p>{user.username}</p>
            <Link to={Paths.Favorites}>Favorites</Link>
            <Link to={Paths.History}>History</Link>
            <Button onClick={() => dispatch(deleteUser())}>log out</Button>
          </>
        ) : (
          <>
            <Link to={Paths.Login}>
              <Button>Login</Button>
            </Link>
            <Link to={Paths.Signup}>
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
