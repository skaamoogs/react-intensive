import { FC } from 'react';
import Header from '../components/header/Header';

import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';
import ErrorPage from './error/Error';

const Layout: FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {/* Maybe a block with search and filters will be here? */}
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
};
export default Layout;
