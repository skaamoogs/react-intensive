import { FC, PropsWithChildren } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Layout from './pages/Layout';
import { Paths } from './const';
import FavoritesPage from './pages/favorites/Favorites';
import HistoryPage from './pages/history/History';
import HomePage from './pages/home/Home';
import LoginPage from './pages/login/Login';
import SignUpPage from './pages/signup/SignUp';
import MoviePage from './pages/movie/Movie';
import ErrorPage from './pages/error/Error';
import { useAppSelector } from './store/hooks';
import { userSelector } from './store/userSlice';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAppSelector(userSelector);
  return isAuthenticated ? (
    (children as JSX.Element)
  ) : (
    <Navigate to={Paths.Login} />
  );
};

const PublicRoute: FC<PropsWithChildren> = ({ children }) => {
  const isAuthenticated = useAppSelector(userSelector);
  return isAuthenticated ? (
    <Navigate to={Paths.Root} />
  ) : (
    (children as JSX.Element)
  );
};

const router = createBrowserRouter([
  {
    path: Paths.Root,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: Paths.Search, element: <HomePage /> },
      { path: Paths.Catalog, element: <HomePage /> },
      { path: `${Paths.Movie}/:movieId`, element: <MoviePage /> },
      {
        path: Paths.Favorites,
        element: (
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        ),
      },
      {
        path: Paths.History,
        element: (
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: Paths.Login,
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: Paths.Signup,
        element: (
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
