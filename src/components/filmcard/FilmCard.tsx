import React from 'react';
import card from './FilmCard.module.css';

interface FilmCardProps {
  imageUrl: string;
  filmName: string;
  filmStatus: string;
}

export const FilmCard: React.FC<FilmCardProps> = ({
  imageUrl,
  filmName,
  filmStatus,
}) => {
  return (
    <div className={card.item}>
      <div className={card.image}>
        <img className={card.image} src={imageUrl} alt={filmName} />
      </div>
      <div className={card.filmName}>{filmName}</div>
      <div className={card.filmStatus}>{filmStatus}</div>
    </div>
  );
};
