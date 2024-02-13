import { FC } from 'react';

import styles from './Header.module.scss';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { Paths } from '../../const';

const Header: FC = () => {
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
            <Link to={Paths.Movies}>Movies</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to={Paths.Series}>TV Series</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to={Paths.Cartoons}>Cartoons</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user_block}>
        <Link to={Paths.Login}>
          <Button>Login</Button>
        </Link>
        <Link to={Paths.Signup}>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
