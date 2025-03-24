import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "dummyTest",
  tagTypes: [""],
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
