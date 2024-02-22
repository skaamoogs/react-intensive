import { useLoaderData } from 'react-router-dom';

import Movies from '../../components/movies/Movies';
import { useSearchMoviesQuery } from '../../api/movies';

const SearchPage = () => {
  const url = useLoaderData() as string;

  const { data, isLoading, isFetching } = useSearchMoviesQuery({
    url,
    limit: 50,
  });

  return (
    <Movies movies={data?.docs ?? []} isLoading={isLoading || isFetching} />
  );
};

export default SearchPage;
