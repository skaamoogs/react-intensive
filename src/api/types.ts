import { Movie } from '../types/types';

export interface ResponseResult {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface BaseQueryParams {
  page?: number;
  limit?: number;
}

export enum FilterFieldNames {
  country = 'countries.name',
  genre = 'genres.name',
}

export interface PossibleFilterValues {
  type?: string;
  status?: string;
  [FilterFieldNames.country]?: string;
  [FilterFieldNames.genre]?: string;
}

export interface MovieFilters extends PossibleFilterValues {
  year?: string;
}

export type GetFilteredMoviesData = BaseQueryParams & MovieFilters;

export interface SearchMoviesData extends BaseQueryParams {
  query: string;
}

export interface GetMovieByIdData {
  id: number;
}

export interface FilterField {
  name: string;
  slug: string;
}

export interface GetFiltersData {
  field: keyof PossibleFilterValues;
}