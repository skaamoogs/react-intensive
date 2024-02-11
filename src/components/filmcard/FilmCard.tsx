import React from 'react';
import card from './FilmCard.module.css';

export const FilmCard: React.FC = () => {
  return (
    <div className={card.item}>
      <div className={card.image}>
        <img
          className={card.image}
          src='https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_.jpg'
        />
      </div>
      <div className={card.filmName}>
        John Wick Chapter Two Chapter Two Chapter
      </div>
      <div className={card.filmStatus}>Coming Soon</div>
    </div>
  );
};
