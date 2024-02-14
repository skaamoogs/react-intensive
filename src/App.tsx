import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import { Paths } from './const';
import FavoritesPage from './pages/favorites/Favorites';
import HistoryPage from './pages/history/History';
import HomePage from './pages/home/Home';
import LoginPage from './pages/login/Login';
import SignUpPage from './pages/signup/SignUp';
import MoviePage from './pages/movie/Movie';
import ErrorPage from './pages/error/Error';

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
      { path: Paths.Favorites, element: <FavoritesPage /> },
      { path: Paths.History, element: <HistoryPage /> },
      { path: Paths.Login, element: <LoginPage /> },
      { path: Paths.Signup, element: <SignUpPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
