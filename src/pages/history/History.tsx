import clsx from 'clsx';
import styles from './History.module.scss';
import { Paths } from '../../const';
import { Link } from 'react-router-dom';

const cards: HistoryCardProps[] = [
  {
    searchQuery: 'Чак Норрис',
    filters: { year: '2011', country: 'США', genre: 'Боевик' },
  },
  {
    searchQuery: 'Чак Норрис',
    filters: { year: '2011', country: 'США', genre: 'Боевик' },
  },
  {
    searchQuery: 'Чак Норрис',
    filters: { year: '2011', country: 'США', genre: 'Боевик' },
  },
  {
    searchQuery: 'Чак Норрис',
    filters: { year: '2011', country: 'США', genre: 'Боевик' },
  },
  {
    searchQuery: 'Чак Норрис',
    filters: { year: '2011', country: 'США', genre: 'Боевик' },
  },
  {
    searchQuery: 'Чак Норрис',
    filters: { year: '2011', country: 'США', genre: 'Боевик' },
  },
];
/*   {
    searchQuery: 'Космос',
    filters: ['2010-2020', 'Великобритания', 'Фантастика'],
  },
  { searchQuery: 'Бернардо Бертолуччи', filters: ['Италия'] },
  { searchQuery: 'Адам Сэндлер', filters: ['2023', 'Комедия'] },
  {
    searchQuery: 'Какой-то очень длинный запрос для проверки UI',
    filters: ['Австралия', 'Дететктив'],
  },
  { searchQuery: 'Космос', filters: {'2010-2020', 'Фантастика'] },
  { searchQuery: 'Годзилла', filters: ['Япония'] },
]; */

const HistoryPage = () => {
  return (
    <>
      <h1 className={styles.title}>История запросов</h1>
      <div className={styles.container}>
        {cards.map((card) => (
          <HistoryCard {...card} />
        ))}
      </div>
    </>
  );
};

export default HistoryPage;

interface HistoryCardProps {
  searchQuery: string;
  filters: Record<string, string>;
  className?: string;
}

const createSeacrhParams = (params: Record<string, string>): string =>
  new URLSearchParams(params).toString();

const HistoryCard = ({ searchQuery, filters, className }: HistoryCardProps) => {
  return (
    <Link
      to={{
        pathname: Paths.Search,
        search: createSeacrhParams({ query: searchQuery, ...filters }),
      }}
    >
      <div className={clsx(styles.card, className)}>
        <p className={styles.title}>{searchQuery}</p>
        <div className={styles.filters}>
          {Object.values(filters).map((f) => (
            <p className={styles.filter}>{f}</p>
          ))}
        </div>
      </div>
    </Link>
  );
};
