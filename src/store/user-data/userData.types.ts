import { Movie } from '../../types/types';

export interface UserData {
  favorites: Movie[];
  history: string[];
}

export interface UserDataState {
  favorites: Movie[];
  history: string[];
}
