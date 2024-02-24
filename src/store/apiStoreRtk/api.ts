import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { Iuser } from '../../types/user.interface';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Video', 'Profile'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4200/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.acessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getAddProfile: builder.query<Iuser, any>({
      query: () => '/user/profile',
      providesTags: () => [{ type: 'Profile' }],
    }),
    updateProfile: builder.mutation({
      query: info => ({
        body: info.user,
        url: `/user/${info.id}`,
        method: 'PUT',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
    getChannelId: builder.query<Iuser, number>({
      query: (id: number) => `/user/by-id/${id}`,
    }),
    getsubscribeUser: builder.mutation<boolean, number | undefined>({
      query: (id: number) => ({
        url: `/user/subscribe/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
  }),
});

export const {
  useGetAddProfileQuery,
  useUpdateProfileMutation,
  useGetChannelIdQuery,
  useGetsubscribeUserMutation,
} = api;
