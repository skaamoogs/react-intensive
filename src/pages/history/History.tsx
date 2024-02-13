import clsx from 'clsx';
import styles from './History.module.scss';
import { Paths } from '../../const';
import { Link } from 'react-router-dom';
import { MovieFilters } from '../../api/types';
import { entries } from './mockHistoryEntries';

const HistoryPage = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>История запросов</h1>
        {entries.length ? (
          <div className={styles.entries}>
            {entries.map((card) => (
              <HistoryEntry {...card} />
            ))}
          </div>
        ) : (
          <p>No entries</p>
        )}
      </div>
    </>
  );
};

export default HistoryPage;

export interface HistoryEntryProps {
  query?: string;
  filters?: MovieFilters;
  className?: string;
}

const createSeacrhParams = (params: Record<string, string>): string =>
  new URLSearchParams(params).toString();

const HistoryEntry = ({ query, filters, className }: HistoryEntryProps) => {
  let params = query ? { query } : filters ? filters : {};

  return (
    <Link
      to={{
        pathname: query ? Paths.Search : `/catalog`,
        search: createSeacrhParams({ ...params }),
      }}
    >
      <div className={clsx(styles.entryContainer, className)}>
        <span className={styles.entry}>
          {query || (filters && Object.values(filters).join(', '))}
        </span>
      </div>
    </Link>
  );
};
