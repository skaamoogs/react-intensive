import { FC } from 'react';
import Header from '../components/header/Header';

const Layout: FC = () => {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        {/* Maybe a block with search and filters will be here? */}
        {/* <Outlet /> */}
      </main>
    </div>
  );
};
export default Layout;
