import { FC } from 'react';
import Header from '../components/header/Header';

import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout: FC = () => {
  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {/* Maybe a block with search and filters will be here? */}
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Layout;
