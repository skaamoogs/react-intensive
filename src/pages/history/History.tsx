import clsx from 'clsx';
import styles from './History.module.scss';

interface HistoryPageProps {
  cards: HistoryCardProps[];
}

const HistoryPage = ({ cards }: HistoryPageProps) => {
  return (
    <>
      {cards.map((card) => (
        <HistoryCard {...card} />
      ))}
    </>
  );
};

export default HistoryPage;

interface HistoryCardProps {
  searchQuery: string;
  filters: string[];
  className?: string;
}

const HistoryCard = ({ searchQuery, filters, className }: HistoryCardProps) => {
  return (
    <div className={clsx(styles.card, className)}>
      <p className={styles.title}>{searchQuery}</p>
      {filters.map((f) => (
        <p className={styles.filter}>{f}</p>
      ))}
    </div>
  );
};
