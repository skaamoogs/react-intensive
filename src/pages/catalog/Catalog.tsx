import { useNavigate, useSearchParams } from 'react-router-dom';
import Movies from '../../components/movies/Movies';
import { useGetFilteredMoviesQuery } from '../../api/movies';
import Select from '../../components/select/Select';
import { COUNTRIES, GENRES, Paths, YEARS } from '../../const';
import styles from './Catalog.module.scss';
import { useEffect, useMemo, useState } from 'react';
import {
  createSearchQuery,
  mapFilterOptions,
  removeEmptyFields,
} from '../../utils/helpers';
import { FilterFieldNames, MovieFilters } from '../../api/types';

const defaultFilters = {
  [FilterFieldNames.genre]: undefined,
  [FilterFieldNames.country]: undefined,
  [FilterFieldNames.year]: undefined,
};

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<MovieFilters>(defaultFilters);

  const [genres, countries, years] = useMemo(
    () => [
      mapFilterOptions(GENRES),
      mapFilterOptions(COUNTRIES),
      [
        { id: 'default', name: 'All' },
        ...YEARS.map((y) => ({ id: y, name: y })),
      ],
    ],
    []
  );

  useEffect(() => {
    navigate({
      pathname: Paths.Catalog,
      search: createSearchQuery({
        type: searchParams.get('type')!,
        ...removeEmptyFields({ ...filters }),
      }),
    });
  }, [filters, navigate, searchParams]);

  const handleChange = (name: string, item: string) => {
    const newValue = item === 'default' ? undefined : item;
    setFilters((prev) => ({ ...prev, [name]: newValue }));
  };

  /*   const { data, isLoading } = useGetFilteredMoviesQuery({
    ...searchParams,
    limit: 50,
  });
 */
  return (
    <div>
      <div className={styles.filters}>
        <label>
          <p className={styles.label}>Genre</p>
          <Select
            data={genres}
            name={FilterFieldNames.genre}
            className={styles.select}
            selectedItemId='default'
            handleChange={handleChange}
          />
        </label>
        <label>
          <p className={styles.label}>Country</p>
          <Select
            data={countries}
            name={FilterFieldNames.country}
            className={styles.select}
            selectedItemId='default'
            handleChange={handleChange}
          />
        </label>
        <label>
          <p className={styles.label}>Year</p>
          <Select
            data={years}
            name={FilterFieldNames.year}
            className={styles.select}
            selectedItemId='default'
            handleChange={handleChange}
          />
        </label>
      </div>
      {/*       <Movies movies={data?.docs ?? []} isLoading={isLoading} />
       */}
    </div>
  );
};

export default CatalogPage;
