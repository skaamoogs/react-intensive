import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { Movie, UserHistory } from '../types/types';
import { RootState } from './store';
import { getFromLocalStorage, setToLocalStorage } from '../utils/localStorage';
import { IUser } from '../api/auth/auth-types';

const getInitialState = () => {
  const userName = getFromLocalStorage<IUser>('user')?.username;
  const defaultState = {
    favorites: [],
    history: [],
  };
  return userName
    ? getFromLocalStorage<UserDataState>(userName) ?? defaultState
    : defaultState;
};

const saveStateToLocalStorage = (state: UserDataState) => {
  const userName = getFromLocalStorage<IUser>('user')?.username;
  const { favorites, history } = state;
  if (userName) {
    setToLocalStorage(userName, { favorites, history });
  }
};

interface UserDataState {
  favorites: Movie[];
  history: UserHistory[];
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState: getInitialState(),
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
      saveStateToLocalStorage(state);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const { favorites } = state;
      state.favorites = favorites.filter((f) => f.id !== id);
      saveStateToLocalStorage(state);
    },
    addHistoryEntry: (state, action: PayloadAction<string>) => {
      const id = uuidv4();
      state.history.push({ id, url: action.payload });
      console.log(state.history);
      saveStateToLocalStorage(state);
    },
    removeHistoryEntry: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const { history } = state;
      state.history = history.filter((h) => h.id !== id);
      saveStateToLocalStorage(state);
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  addHistoryEntry,
  removeHistoryEntry,
} = userDataSlice.actions;

export const userFavoritesSelector = (state: RootState) =>
  state.userData.favorites;
export const userHistorySelector = (state: RootState) => state.userData.history;

export default userDataSlice.reducer;
