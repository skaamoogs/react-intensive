import { useSearchParams } from 'react-router-dom';
import Movies from '../../components/movies/Movies';
import { useGetFilteredMoviesQuery } from '../../api/movies';
import Select from '../../components/select/Select';
import { COUNTRIES, GENRES, YEARS } from '../../const';
import styles from './Catalog.module.scss';

const CatalogPage = () => {
  const searchParams = useSearchParams();

  /*   const { data, isLoading } = useGetFilteredMoviesQuery({
    ...searchParams,
    limit: 50,
  });
 */
  return (
    <div>
      <div className={styles.filters}>
        <Select data={GENRES.map((e) => ({ id: e.slug, name: e.name }))} />
        <Select data={COUNTRIES.map((e) => ({ id: e.slug, name: e.name }))} />
        <Select data={YEARS.map((e) => ({ id: e, name: e }))} />
      </div>
      {/*       <Movies movies={data?.docs ?? []} isLoading={isLoading} />
       */}{' '}
    </div>
  );
};

export default CatalogPage;
