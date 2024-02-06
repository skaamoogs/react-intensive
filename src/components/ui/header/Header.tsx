import { FC } from 'react'

import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.bold}>
          <span className={styles.bounce_letter}>A</span>
          <span>ston</span>
        </div>
        <div className={styles.thin}>FILMS</div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <a href='#'>Movies</a>
          </li>
          <li className={styles.menu_item}>
            <a href='#'>TV series</a>
          </li>
          <li className={styles.menu_item}>
            <a href='#'>Cartoons</a>
          </li>
        </ul>
      </nav>
      <div className={styles.user_block}>
        <button className={(styles.button, styles.login)}>Login</button>
        <button className={(styles.button, styles.signup)}>Sign Up</button>
      </div>
    </header>
  )
}
export default Header
