import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Endpoints } from '../config';
import {
  DefaultResponse,
  LoginBody,
  LoginResponse,
  registerBody,
} from './auth-types';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_LOGIN_SERVER_API,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: Endpoints.login,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<DefaultResponse, registerBody>({
      query: (body) => ({
        url: Endpoints.register,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const authReducer = authApi.reducer;

export const { useRegisterMutation, useLoginMutation } = authApi;
