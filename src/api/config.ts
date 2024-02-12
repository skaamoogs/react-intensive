export const BASE_URL = 'https://api.kinopoisk.dev/';

export enum Endpoints {
  GetMovies = '/v1.4/movie',
  SearchMovies = '/v1.4/movie/search',
  PossibleValuesByField = '/v1/movie/possible-values-by-field',
}

export const DEFAULT_TIMEOUT = 5000;
