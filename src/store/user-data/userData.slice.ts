import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '../../utils/localStorage';
import { UserData, UserDataState } from './userData.types';

const initialState: UserDataState = {
  userData: null,
  userId: null,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserFavorites: (state, action: PayloadAction<UserData['favorites']>) => {
      //state.userData?.favorites = action.payload;
    },
  },
});

export const { setUserFavorites } = userDataSlice.actions;
