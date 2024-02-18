import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './Select.module.scss';
import { useOutsideClick } from '../../hooks/useOutsideClick';

// IMovie or ITVSeries here
interface ListItem {
  id: string;
  name: string;
}

export interface SelectElements {
  data: ListItem[];
  selectedItemId?: string;
}

const Select: FC<SelectElements> = ({ data, selectedItemId }) => {
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [listShow, setListShow] = useState<boolean>(false);

  const listRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLUListElement>(null);

  const handleOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const elementId = target.getAttribute('data-id');
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

  useOutsideClick({
    elementRef: listRef,
    triggerRef: selectRef,
    enabled: listShow,
    onOutsideClick: () => setListShow(false),
  });

  const handleSelectClick = (e: MouseEvent<HTMLDivElement>) => {
    if (listShow) {
      e.stopPropagation();
      setListShow(false);
    } else {
      setListShow(true);
    }
  };

  return (
    <div
      className={styles.select_container}
      ref={listRef}
      onClick={handleSelectClick}
    >
      <div className={clsx(styles.selected_text, listShow && styles.active)}>
        <span>{selectedItem ? selectedItem.name : 'Нет'}</span>
        <img
          className={clsx(styles.select_arrow, listShow && styles.active)}
          src='/arrow.svg'
          alt='arrow'
        />
      </div>
      {listShow && (
        <ul className={styles.select_options} ref={selectRef}>
          <li
            className={styles.select_option}
            data-id={0}
            key={0}
            onClick={handleOptionClick}
          >
            Нет
          </li>
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
