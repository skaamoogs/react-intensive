import { FC } from 'react';

import styles from './Header.module.scss';
import Button from '../button/Button';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a
        href='https://github.com/skaamoogs/react-intensive'
        className={styles.logo}
      >
        <div className={styles.bold}>
          <span className={styles.bounce_letter}>A</span>
          <span>ston</span>
        </div>
        <div className={styles.thin}>FILMS</div>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <a href='https://github.com/skaamoogs/react-intensive'>Movies</a>
          </li>
          <li className={styles.menu_item}>
            <a href='https://github.com/skaamoogs/react-intensive'>TV series</a>
          </li>
          <li className={styles.menu_item}>
            <a href='https://github.com/skaamoogs/react-intensive'>Cartoons</a>
          </li>
        </ul>
      </nav>
      <div className={styles.user_block}>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};
export default Header;
