import { createApi } from '@reduxjs/toolkit/query/react';
import { Endpoints } from './config';
import {
  GetFilteredMoviesData,
  ResponseResult,
  SearchMoviesData,
} from './types';
import { baseQuery } from './utils';

const moviesQuery = <T>(data: GetFilteredMoviesData) => {
  return {
    url: Endpoints.GetMovies,
    params: data,
  };
};

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery,
  endpoints: (builder) => ({
    getFilteredMovies: builder.query<ResponseResult, GetFilteredMoviesData>({
      query: moviesQuery,
    }),
    searchMovies: builder.query<ResponseResult, SearchMoviesData>({
      query: moviesQuery,
    }),
  }),
});

export const moviesReducer = moviesApi.reducer;

export const { useGetFilteredMoviesQuery, useSearchMoviesQuery } = moviesApi;
