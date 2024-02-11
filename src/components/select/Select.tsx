import { FC, MouseEvent, useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './Select.module.scss';

// IMovie or ITVSeries here
interface ListItem {
  id: number;
  name: string;
}

export interface SelectElements {
  data: ListItem[];
  selectedItemId?: number;
}

const Select: FC<SelectElements> = ({ data, selectedItemId }) => {
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [listShow, setListShow] = useState<boolean>(false);

  const handleOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const elementId = Number(target.getAttribute('data-id'));
    const element = data.find((element) => element.id === elementId);
    setSelectedItem(element ?? null);
    setListShow(false);
  };

  useEffect(() => {
    if (selectedItemId) {
      const chosenElement = data.find(
        (element) => element.id === selectedItemId
      );
      if (chosenElement) {
        setSelectedItem(chosenElement);
      }
    }
  }, [data, selectedItemId]);

  return (
    <div className={styles.select_container}>
      <div
        className={clsx(styles.selected_text, listShow && styles.active)}
        onClick={() => setListShow(true)}
      >
        <span>{selectedItem ? selectedItem.name : 'Выберите значение'}</span>
        <img
          className={clsx(styles.select_arrow, listShow && styles.active)}
          src='/arrow.svg'
          alt='arrow'
        />
      </div>
      {listShow && (
        <ul className={styles.select_options}>
          {data.map((option) => {
            return (
              <li
                className={styles.select_option}
                data-id={option.id}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Select;
