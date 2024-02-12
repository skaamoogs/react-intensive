import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Paths } from '../../const';

const HomePage = () => {
  const { pathname } = useLocation();
  const type = useMemo(() => {
    let type = '';
    switch (pathname) {
      case Paths.Root:
        break;
      case Paths.Movies:
        type = 'tv-series';
        break;
      case Paths.Series:
        type = 'tv-series';
        break;
      case Paths.Cartoons:
        type = 'cartoons';
        break;
    }
    return type;
  }, [pathname]);

  const movies = [];

  return <div>Home</div>;
};

export default HomePage;
