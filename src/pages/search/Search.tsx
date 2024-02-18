import { useSearchParams } from 'react-router-dom';
import Movies from '../../components/movies/Movies';
import { useSearchMoviesQuery } from '../../api/movies';

const SearchPage = () => {
  const searchParams = useSearchParams();

  const { data, isLoading } = useSearchMoviesQuery({
    query: searchParams[0].get('query')!,
    limit: 50,
  });

  console.log(data);

  return <Movies movies={data?.docs ?? []} isLoading={isLoading} />;
};

export default SearchPage;
