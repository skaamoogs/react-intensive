import { ReactComponent as FavoriteSvg } from '../../assets/favorite.svg';
import styles from './FavoriteButton.module.scss';

export const FavoriteButton = () => {
  return (
    <button className={styles.button}>
      <FavoriteSvg className={styles.icon} />
    </button>
  );
};
