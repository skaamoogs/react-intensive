/* import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../utils/localStorage';
import { UserData, UserDataState } from './userData.types';
import { Movie } from '../../types/types';

const initialState: UserDataState = {
  favorites: [],
  history: [],
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const { favorites } = state;
      state.favorites = favorites.filter((f) => f.id !== id);
    },
    addHistoryEntry: (state, action: PayloadAction<History>) => {},
  },
});

export const {} = userDataSlice.actions; */
export {};
