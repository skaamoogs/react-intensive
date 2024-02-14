import { useState } from 'react';
import Input from '../input/Input';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  value?: string;
}

const SearchBar = ({ value }: SearchBarProps) => {
  const [search, setSearch] = useState(value);

  return (
    <form className={styles.form}>
      <Input
        value={search}
        onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
        type='search'
        className={styles.input}
      />
      <button type='submit' className={styles.searchButton}>
        <img src='search.svg' alt='search' className={styles.searchIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
