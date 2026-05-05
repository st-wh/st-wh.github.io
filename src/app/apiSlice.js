import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { githubUsername } from "../config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users/${githubUsername}`,
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
