import { Movie } from '../../types/types';

export interface UserData {
  favorites: Movie[];
  history: User[];
}

export interface UserDataState {
  favorites: Movie[];
  history: string[];
}
