import * as React from 'react';
import item from './FilmPage.module.scss';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export function CustomizedRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component='legend'>Rating</Typography>
      <Rating name='customized-10' defaultValue={2} max={10} />
    </Box>
  );
}

type FilmProps = {
  filmName: string;
  filmImageUrl: string;
  filmTextDescription: string;
};

const FilmPage = ({
  filmName,
  filmImageUrl,
  filmTextDescription,
}: FilmProps) => {
  return (
    <div className={item.filmPage}>
      <div>
        <div className={item.filmImage}>
          <img className={item.filmImage} src={filmImageUrl} alt='#' />
        </div>
        <div className={item.filmName}>{filmName}</div>
      </div>
      <div className={item.filmDescription}>
        <div className={item.filmTextDescription}>{filmTextDescription}</div>
        <div className={item.buttonsContainer}>
          <div className={item.filmRating}>
            <CustomizedRating />
          </div>
          <button className={item.button}>Trailer</button>
          <button className={item.button}>View Film</button>
        </div>
      </div>
    </div>
  );
};

export default FilmPage;
