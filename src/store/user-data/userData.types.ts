import { Movie } from '../../types/types';

export interface UserData {
  favorites: Movie[];
  history: string[];
}

export interface UserDataState {
  userData: UserData | null;
  userId: string | null;
}
