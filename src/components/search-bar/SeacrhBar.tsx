import { ChangeEvent, useRef, useState } from 'react';
import Input from '../input/Input';
import styles from './SearchBar.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Paths } from '../../const';

const queryParamName = 'query';

const SearchBar = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    params.get(queryParamName) ?? ''
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    navigate(Paths.Search);
  };

  const resetInput = () => {
    setSearchValue('');
    inputRef.current?.focus();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        value={searchValue}
        onChange={handleInputChange}
        type='search'
        className={styles.input}
        name={queryParamName}
        ref={inputRef}
      />
      {searchValue && (
        <button
          type='reset'
          className={styles.cancelButton}
          onClick={resetInput}
        >
          <img src='cross.svg' alt='cancel' className={styles.icon} />
        </button>
      )}
      <button type='submit' className={styles.button}>
        <img src='search.svg' alt='search' className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
