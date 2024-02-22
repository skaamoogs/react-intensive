import { createApi } from '@reduxjs/toolkit/query/react';
import { Endpoints } from './config';
import {
  GetFilteredMoviesData,
  ResponseResult,
  SearchMoviesData,
} from './types';
import { baseQuery } from './utils';
import { addHistoryEntry } from '../store/userDataSlice';

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery,
  endpoints: (builder) => ({
    getFilteredMovies: builder.query<ResponseResult, GetFilteredMoviesData>({
      query: (data) => {
        return {
          url: Endpoints.GetMovies,
          params: data,
        };
      },
    }),
    searchMovies: builder.query<ResponseResult, SearchMoviesData>({
      query: (data) => {
        console.log(data.url);
        const { searchParams } = new URL(data.url);
        return {
          url: Endpoints.SearchMovies,
          params: searchParams,
        };
      },
      async onQueryStarted(requestData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(addHistoryEntry(requestData.url));
          }
        } catch (error) {
          console.log('Error searching movies');
        }
      },
    }),
  }),
});

export const moviesReducer = moviesApi.reducer;

export const { useGetFilteredMoviesQuery, useSearchMoviesQuery } = moviesApi;
