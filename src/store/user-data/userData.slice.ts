/* import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../utils/localStorage';
import { AddFavoriteMovie, UserData, UserDataState } from './userData.types';
import { IUser } from '../../api/auth/auth-types';
import { store } from '../store';
import { Movie } from '../../types/types';

const initialState: UserDataState = {

    favorites: [],
    history: [],

};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    getUserFavoritesFromLocalStorage: (state, action: PayloadAction<string>) => {
      const favorites = getFromLocalStorage<Movie[]>(action.payload);
      if (favorites) {
        state.userData = userData;
      }
    },
    
    addFavoriteMovie: (state, action: PayloadAction<AddFavoriteMovie>) => {

      state.userData.favorites.push(action.payload);

      const userData = getFromLocalStorage<UserData>(action.payload.userName);
      if (userData)
    },
  },
});

export const { setUserFavorites } = userDataSlice.actions;
 */

export {};
