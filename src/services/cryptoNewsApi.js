import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key':
    '10a6d0f9b0msha0ce24f6b6e36f7p1fc8f8jsn7c6b9d2622a5',
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeader,
});

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
